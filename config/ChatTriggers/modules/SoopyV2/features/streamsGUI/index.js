import fetch from"../../../SoopyV2/utils/networkUtils";import Promise from"../../../PromiseV2";

import SoopyTextElement from"../../../guimanager/GuiElement/SoopyTextElement";
import Feature from"../../featureClass/class";
import GuiPage from"../soopyGui/GuiPage";
import SoopyBoxElement from"../../../guimanager/GuiElement/SoopyBoxElement";
import SoopyMarkdownElement from"../../../guimanager/GuiElement/SoopyMarkdownElement";
import SoopyImageElement from"../../../guimanager/GuiElement/SoopyImageElement";
import SoopyGuiElement from"../../../guimanager/GuiElement/SoopyGuiElement";
import SoopyMouseClickEvent from"../../../guimanager/EventListener/SoopyMouseClickEvent";
import ButtonWithArrow from"../../../guimanager/GuiElement/ButtonWithArrow";
import BoxWithText from"../../../guimanager/GuiElement/BoxWithText";

class StreamsGui extends Feature{
constructor(){
super();
}

onEnable(){
this.initVariables();

this.GuiPage=new StreamPage;

}

initVariables(){
this.GuiPage=undefined;
}

onDisable(){
this.initVariables();
}}



class StreamPage extends GuiPage{
constructor(){
super(7);

this.name="Skyblock Streams";

this.pages=[this.newPage()];


this.pages[0].addChild(new SoopyTextElement().setText("\xA70Skyblock Streams").setMaxTextScale(3).setLocation(0.1,0.05,0.6,0.1));

let button=new ButtonWithArrow().setText("\xA70Open in browser").setLocation(0.7,0.05,0.2,0.1);
this.pages[0].addChild(button);

button.addEvent(new SoopyMouseClickEvent().setHandler(()=>{
java.awt.Desktop.getDesktop().browse(
new java.net.URI("https://soopy.dev/skyblockstreams"));

}));

this.streamsBox=new SoopyGuiElement().setLocation(0.1,0.15,0.8,0.85);

this.streamsBox.setScrollable(true);

this.pages[0].addChild(this.streamsBox);

this.finaliseLoading();
}

updateStreams(){return Promise.resolve().then(()=>{return(
fetch("https://soopy.dev/api/skyblockstreams").json())}).then((_resp)=>{let streams=_resp;
this.streamsBox.clearChildren();

let y=0;

Object.keys(streams.twitch).forEach((channel,i)=>{
let stream=streams.twitch[channel];

if(i%2===0){
let element=new StreamElement().setLocation(0,y,0.45,0.4).setStreamPage(this);
this.streamsBox.addChild(element);
element.setStream(stream,true);
}
if(i%2===1){
let element=new StreamElement().setLocation(0.55,y,0.45,0.4).setStreamPage(this);
this.streamsBox.addChild(element);
element.setStream(stream,true);
y+=0.45;
}
})})}


openStreamSidebar(data){
let sidebar=new SoopyGuiElement().setLocation(0,0,1,1);

this.openSidebarPage(sidebar);

sidebar.addChild(new SoopyTextElement().setText("\xA70"+data.user_name).setMaxTextScale(3).setLocation(0.1,0.05,0.8,0.1));

let title=new SoopyMarkdownElement().setText(data.title).setLocation(0.1,0.15,0.8,0.1);
sidebar.addChild(title);

let image=new SoopyImageElement().setLocation(0.1,0.15+title.getHeight(),0.8,0.4).setImage(data.image);
sidebar.addChild(image);


let button=new ButtonWithArrow().setText("\xA70Watch on Twitch").setLocation(0.1,0.15+image.location.size.y.get()+title.getHeight(),0.8,0.1);
sidebar.addChild(button);

button.addEvent(new SoopyMouseClickEvent().setHandler(()=>{
java.awt.Desktop.getDesktop().browse(
new java.net.URI("https://twitch.tv/"+data.user_login));

}));

let language;
if(data.language){
language=new BoxWithText().setText("\xA70Language: "+data.language).setLocation(0.3,0.25+image.location.size.y.get()+title.getHeight(),0.4,0.1);

sidebar.addChild(language);
}

image.onImageHeightChange(()=>{
button.location.location.y.set(0.15+image.location.size.y.get()+title.getHeight());
if(language)language.location.location.y.set(0.25+image.location.size.y.get()+title.getHeight());
},this);
image.loadHeightFromImage();
}

onOpen(){
this.updateStreams();
}}


class StreamElement extends SoopyBoxElement{
constructor(){
super();

this.streamData=undefined;

this.channelElement=new SoopyTextElement().setLocation(0.1,0.025,0.8,0.1).setMaxTextScale(10);

this.channelImg=new SoopyImageElement().setLocation(0.1,0.125,0.8,0.2);

this.titleElement=new SoopyMarkdownElement().setLocation(0.1,0.45,0.8,0.1);

this.channelImg.onImageHeightChange(()=>{
this.titleElement.location.location.y.set(0.15+this.channelImg.location.size.y.get());
},this);

this.streamPage=undefined;

this.addEvent(new SoopyMouseClickEvent().setHandler(()=>{
this.streamPage.openStreamSidebar(this.streamData);
}));

this.addChild(this.channelElement);
this.addChild(this.titleElement);
this.addChild(this.channelImg);
}

setStream(stream,twitch){
this.streamData=stream;

this.titleElement.setText(stream.title);

this.channelElement.setText((twitch?"\xA70"+stream.user_name:"\xA70"+stream.channelTitle)+(twitch?"&7 - "+stream.viewer_count+" viewer"+(stream.viewer_count!==1?"s":""):""));

this.streamData.image=twitch?`https://static-cdn.jtvnw.net/previews-ttv/live_user_${stream.user_login}-640x360.jpg`:stream.thumbnails.high.url;
this.channelImg.setImage(this.streamData.image);
this.channelImg.loadHeightFromImage();

return this;
}

setStreamPage(page){
this.streamPage=page;

return this;
}}


module.exports={
class:new StreamsGui};