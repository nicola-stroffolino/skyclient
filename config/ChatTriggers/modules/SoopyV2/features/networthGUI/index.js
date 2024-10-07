import fetch from"../../../SoopyV2/utils/networkUtils";import Promise from"../../../PromiseV2";

import SoopyTextElement from"../../../guimanager/GuiElement/SoopyTextElement";
import Feature from"../../featureClass/class";
import GuiPage from"../soopyGui/GuiPage";
import BoxWithLoading from"../../../guimanager/GuiElement/BoxWithLoading";
import BoxWithTextAndDescription from"../../../guimanager/GuiElement/BoxWithTextAndDescription";
import SoopyGuiElement from"../../../guimanager/GuiElement/SoopyGuiElement";
import TextBox from"../../../guimanager/GuiElement/TextBox";
import SoopyKeyPressEvent from"../../../guimanager/EventListener/SoopyKeyPressEvent";
import{numberWithCommas}from"../../utils/numberUtils";
import{firstLetterWordCapital}from"../../utils/stringUtils";
import SoopyBoxElement from"../../../guimanager/GuiElement/SoopyBoxElement";
import SoopyMarkdownElement from"../../../guimanager/GuiElement/SoopyMarkdownElement";
import SoopyMouseClickEvent from"../../../guimanager/EventListener/SoopyMouseClickEvent";
import ButtonWithArrow from"../../../guimanager/GuiElement/ButtonWithArrow";
import Dropdown from"../../../guimanager/GuiElement/Dropdown";
import SoopyContentChangeEvent from"../../../guimanager/EventListener/SoopyContentChangeEvent";

let petTierColor={
"COMMON":"\xA7f",
"UNCOMMON":"\xA7a",
"RARE":"\xA79",
"EPIC":"\xA75",
"LEGENDARY":"\xA76",
"MYTHIC":"\xA7d"};


class NetworthGui extends Feature{
constructor(){
super();
}

onEnable(){
this.initVariables();

this.GuiPage=new NetworthPage;

}

initVariables(){
this.GuiPage=undefined;
}

onDisable(){
this.initVariables();
}}



class NetworthPage extends GuiPage{
constructor(){
super(7);

this.name="Networth";

this.pages=[this.newPage()];

this.pages[0].addChild(new SoopyTextElement().setText("\xA70Networth").setMaxTextScale(3).setLocation(0.1,0.05,0.6,0.1));
this.pages[0].addChild(new SoopyTextElement().setText("\xA70(This is in beta and may be inaccurate)").setMaxTextScale(3).setLocation(0.1,0.15,0.8,0.075));
let button=new ButtonWithArrow().setText("\xA70Open in browser").setLocation(0.7,0.05,0.2,0.1);
this.pages[0].addChild(button);

button.addEvent(new SoopyMouseClickEvent().setHandler(()=>{
java.awt.Desktop.getDesktop().browse(
new java.net.URI("https://soopy.dev/networth"));

}));

this.nameInput=new TextBox().setPlaceholder("Click to search").setLocation(0.1,0.225,0.8,0.1);
this.pages[0].addChild(this.nameInput);

this.nameInput.addEvent(new SoopyKeyPressEvent().setHandler((key,keyId)=>{
if(this.nameInput.text.selected&&keyId===28){
this.playerLoad=this.nameInput.text.text;
this.nameInput.setText("");
this.updateData(this.playerLoad);
}
}));

this.statArea=new SoopyGuiElement().setLocation(0.05,0.325,0.9,0.675).setScrollable(true);
this.pages[0].addChild(this.statArea);

this.loadingElm=new BoxWithLoading().setLocation(0.35,0.4,0.3,0.2);
this.errorElm=new BoxWithTextAndDescription().setLocation(0.2,0.3,0.6,0.4).setText("Error!").setDesc("An error occured while loading the data!");
this.statArea.addChild(this.loadingElm);

this.playerLoad=undefined;

this.sidebarElement=new SoopyGuiElement().setLocation(0,0,1,1);

this.sidebarUsernameSearch=new TextBox().setLocation(0.15,0.05,0.7,0.1).setPlaceholder("Click to search");
this.sidebarElement.addChild(this.sidebarUsernameSearch);

this.sidebarUsernameSearch.addEvent(new SoopyKeyPressEvent().setHandler((key,keyId)=>{
if(this.sidebarUsernameSearch.text.selected&&keyId===28){
let search=this.sidebarUsernameSearch.text.text;
this.sidebarUsernameSearch.setText("");
this.sidebarSearch(search);
}
}));

this.lbBackButton=new ButtonWithArrow().setLocation(0.05,0.05,0.1,0.1).setText("\xA70Back").setDirectionRight(false);
this.lbNextButton=new ButtonWithArrow().setLocation(0.85,0.05,0.1,0.1).setText("\xA70Next");
this.sidebarElement.addChild(this.lbBackButton);
this.sidebarElement.addChild(this.lbNextButton);
this.lbBackButton.addEvent(new SoopyMouseClickEvent().setHandler(()=>{
if(this.currentLbPage>0)this.goToLeaderboardPage(this.currentLbPage-1);
}));
this.lbNextButton.addEvent(new SoopyMouseClickEvent().setHandler(()=>{
this.goToLeaderboardPage(this.currentLbPage+1);
}));

this.leaderboardArea=new SoopyGuiElement().setLocation(0.05,0.15,0.9,0.85).setScrollable(true);
this.sidebarElement.addChild(this.leaderboardArea);

this.currentLbPage=0;

this.finaliseLoading();
}

updateData(player,profIn){var _test;return Promise.resolve().then(()=>{
this.playerLoad=player;

this.statArea._scrollAmount=0;
this.statArea.location.scroll.y.set(0,100);

this.statArea.clearChildren();
this.statArea.addChild(this.loadingElm);return(

fetch("https://soopy.dev/api/v2/player/"+player).json())}).then((_resp)=>{let playerData=_resp;return(()=>{

if(!(player!==this.playerLoad)){return(()=>{return(()=>{

if(!playerData.success){
this.statArea.clearChildren();
this.statArea.addChild(this.errorElm);
this.errorElm.setText("\xA70"+playerData.error.name);
this.errorElm.setDesc("\xA70"+playerData.error.description);

}else{return Promise.resolve().then(()=>{return(

fetch("https://soopy.dev/api/v2/player_skyblock/"+playerData.data.uuid+"?networth=true").json())}).then((_resp)=>{let skyblockData=_resp;return(()=>{

if(!(player!==this.playerLoad)){return(()=>{

this.statArea.clearChildren();return(()=>{

if(!skyblockData.success){
this.statArea.addChild(this.errorElm);
this.errorElm.setText("\xA70"+skyblockData.error.name);
this.errorElm.setDesc("\xA70"+skyblockData.error.description);

}else{return Promise.resolve().then(()=>{

let selectedProf=profIn||skyblockData.data.stats.bestProfileId;

let nwData=skyblockData.data.profiles[selectedProf].members[playerData.data.uuid].nwDetailed;
let nameElm=new SoopyTextElement().setText(playerData.data.stats.nameWithPrefix.replace(/§f/g,"\xA77")).setMaxTextScale(2).setLocation(0.1,0.05,0.8,0.1);
this.statArea.addChild(nameElm);

let profOptions={};
Object.keys(skyblockData.data.profiles).forEach((p)=>{
profOptions[p]=skyblockData.data.profiles[p].stats.cute_name;
});

let profileSelect=new Dropdown().setOptions(profOptions).setSelectedOption(selectedProf).setLocation(0.1,0.15,0.3,0.1).addEvent(new SoopyContentChangeEvent().setHandler((newval)=>{
this.updateData(player,newval);
}));
this.statArea.addChild(profileSelect);
this.statArea.addChild(new SoopyTextElement().setText("\xA70Networth: \xA72$"+numberWithCommas(Math.round(nwData.networth)).replace(/,/g,"\xA77,\xA72")).setMaxTextScale(1.5).setLocation(0.45,0.15,0.4,0.1));
this.statArea.addChild(new SoopyTextElement().setText("\xA70Purse: \xA72$"+numberWithCommas(Math.round(nwData.purse)).replace(/,/g,"\xA77,\xA72")+"\xA70 | Bank: \xA72$"+numberWithCommas(Math.round(nwData.bank)).replace(/,/g,"\xA77,\xA72")).setMaxTextScale(1.5).setLocation(0.1,0.25,0.8,0.1));

Object.keys(nwData.types).sort((a,b)=>nwData.types[b].total-nwData.types[a].total).forEach((name,i)=>{
let renderName=firstLetterWordCapital(name.replace(/_/g," "));

let data=nwData.types[name];

let box=new SoopyBoxElement().setLocation(i%2===0?0:0.525,0.45+Math.floor(i/2)*0.35,0.475,0.25);

box.addChild(new SoopyMarkdownElement().setLocation(0,0,1,1).setText(data.items.filter((i)=>i.name).splice(0,5).map((a)=>{
let rName=a.loreName||a.name;
let name=rName.startsWith("\xA7f")||rName.startsWith("\xA77[Lvl ")?rName.replace("\xA7f","\xA77"):rName;
if(a.count&&a.count>1)name+=" \xA77x"+a.count;
if(a.type){
name=`§7[${a.level}] ${petTierColor[a.tier]}${firstLetterWordCapital(a.type.replace(/_/g," ").toLowerCase())}`;
}
return"\xA7a"+name+"\xA70: \xA72$"+numberWithCommas(Math.round(a.price)).replace(/,/g,"\xA77,\xA72");
}).join("\n")));

let boxName=new SoopyTextElement().setLocation(i%2===0?0:0.525,0.4+Math.floor(i/2)*0.35,0.475,0.05).setText("\xA70"+renderName+"\xA70: \xA72$"+numberWithCommas(Math.round(data.total)).replace(/,/g,"\xA77,\xA72"));

this.statArea.addChild(box);
this.statArea.addChild(boxName);
});_test=

selectedProf===skyblockData.data.stats.bestProfileId;return(()=>{if(_test){return Promise.resolve().then(()=>{return(
fetch("https://soopy.dev/api/v2/leaderboard/networth/user/"+playerData.data.uuid).json())}).then((_resp)=>{let leaderboardData=_resp})}})()}).then(()=>{
if(!(_test&&player!==this.playerLoad)){

if(_test&&leaderboardData.success){nameElm.setText("\xA70#"+numberWithCommas(leaderboardData.data.data.position+1)+" "+playerData.data.stats.nameWithPrefix.replace(/§f/g,"\xA77"))}}})}})()})()}})()})}})()})()}})()}).then(()=>{})}




onOpen(){
this.playerLoad=Player.getName();
this.updateData(Player.getName());

this.goToLeaderboardPage(0);

this.openSidebarPage(this.sidebarElement);
}

sidebarSearch(user){return Promise.resolve().then(()=>{return(
fetch("https://soopy.dev/api/v2/leaderboard/networth/user/"+user).json())}).then((_resp)=>{let data=_resp;
if(!!data.success){



let position=data.data.data.position;

this.goToLeaderboardPage(Math.floor(position/100),false);

this.leaderboardArea._scrollAmount=-(position%100*0.1-0.45)*this.leaderboardArea.location.getHeightExact();
this.leaderboardArea.location.scroll.y.set(-(position%100*0.1-0.45)*this.leaderboardArea.location.getHeightExact(),100)}})}


goToLeaderboardPage(page,scroll=true){return Promise.resolve().then(()=>{
this.currentLbPage=page;

if(scroll){this.leaderboardArea._scrollAmount=0}
if(scroll){this.leaderboardArea.location.scroll.y.set(0,100)}return(

fetch("https://soopy.dev/api/v2/leaderboard/networth/"+page).json())}).then((_resp)=>{let data=_resp;
this.leaderboardArea.clearChildren();
data.data.data.forEach((user,i)=>{
this.leaderboardArea.addChild(
new SoopyTextElement().setText("\xA70#"+numberWithCommas(i+1+page*100)+": "+user.username).setMaxTextScale(1.5).setLocation(0.05,i*0.05,0.5,0.05).setLore(["Click to show detailed stats"]).addEvent(new SoopyMouseClickEvent().setHandler(()=>{
this.updateData(user.uuid);
})));

this.leaderboardArea.addChild(
new SoopyTextElement().setText("\xA72$"+numberWithCommas(Math.round(user.networth)).replace(/,/g,"\xA77,\xA72")).setMaxTextScale(1.5).setLocation(0.6,i*0.05,0.35,0.05));

})})}}



module.exports={
class:new NetworthGui};