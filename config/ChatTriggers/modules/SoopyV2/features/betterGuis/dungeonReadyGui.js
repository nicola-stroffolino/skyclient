import{SoopyGui,SoopyRenderEvent}from"../../../guimanager";
import SoopyKeyPressEvent from"../../../guimanager/EventListener/SoopyKeyPressEvent";
import SoopyMouseClickEvent from"../../../guimanager/EventListener/SoopyMouseClickEvent";
import BoxWithTextAndDescription from"../../../guimanager/GuiElement/BoxWithTextAndDescription";
import ButtonWithArrow from"../../../guimanager/GuiElement/ButtonWithArrow";
import SoopyGuiElement from"../../../guimanager/GuiElement/SoopyGuiElement";
import SoopyTextElement from"../../../guimanager/GuiElement/SoopyTextElement";
import{getLore}from"../../utils/utils";


const ContainerChest=Java.type("net.minecraft.inventory.ContainerChest");

class DungeonReadyGui{
constructor(){
this.checkMenu=false;

this.soopyGui=new SoopyGui;

this.soopyGui.optimisedLocations=true;

this.mainPage=new SoopyGuiElement().setLocation(0,0,1,1);
this.soopyGui.element.addChild(this.mainPage);
this.soopyGui.element.addEvent(new SoopyKeyPressEvent().setHandler((...args)=>
this.keyPress(...args)));



this.startButton=new ButtonWithArrow().
setText("\xA70Start Dungeon").
setLocation(0.25,0.25,0.5,0.5).
addEvent(new SoopyMouseClickEvent().setHandler(()=>
this.startDungeon()));

this.soopyGui.element.addChild(this.startButton);

this.startButton.desc=new SoopyTextElement().
setMaxTextScale(2).
setLocation(0.05,0.6,0.7,0.4).
setText("");
this.startButton.addChild(this.startButton.desc);

this.closeMenu=0;
this.nameToId={};
this.nextId=0;
this.currPlayers=1;
this.readyBoxes=[];
this.confirmationCooldown=0;
for(let i=0;i<4;i++){
let readyBox=new BoxWithTextAndDescription().
setText("\xA70").
setDesc("\xA70").
setLocation(0.1+0.2*i,0.75,0.15,0.15).
setColor(255,150,150);
this.readyBoxes.push(readyBox);


readyBox.text.setLocation(0,0,1,0.6);
readyBox.description.setLocation(0.05,0.6,0.9,0.4);
readyBox.visable=false;


this.mainPage.addChild(readyBox);
}

this.classBoxes=[];
this.currentPlayerClass=-1;
this.classes={
"Healer":new Item("minecraft:potion"),
"Mage":new Item("minecraft:blaze_rod"),
"Berserker":new Item("minecraft:iron_sword"),
"Archer":new Item("minecraft:bow"),
"Tank":new Item("minecraft:leather_chestplate")};

Object.keys(this.classes).forEach((clas,i)=>{
let classBox=new BoxWithTextAndDescription().
setText("\xA70"+clas+"&7 - 0").
setDesc("\xA70").
setLocation(0.1+0.1625*i,0.1,0.15,0.1);
this.classBoxes.push(classBox);

let classIndex=i;

classBox.text.setLocation(0,0,1,0.6);
classBox.description.setLocation(0.05,0.6,0.9,0.4);
classBox.addEvent(new SoopyRenderEvent().
setHandler(()=>{
let scale=16/Math.min(classBox.location.getWidthExact(),classBox.location.getHeightExact()/2)*3;
this.classes[clas].draw(classBox.location.getXExact()+classBox.location.getWidthExact()/2-16*scale/2,classBox.location.getYExact()+classBox.location.getHeightExact()-16*scale-4,scale);
})).addEvent(new SoopyMouseClickEvent().setHandler(()=>
this.clickedClass(classIndex)));


this.mainPage.addChild(classBox);
});

this.playerReadyButton=new ButtonWithArrow().
setText("\xA70Ready").
setLocation(0.33,0.33,0.33,0.33).
setColor(255,150,150).
addEvent(new SoopyMouseClickEvent().
setHandler(()=>this.ready()));
this.mainPage.addChild(this.playerReadyButton);
}

joinedDungeon(players){
this.currPlayers=players;
}

startDungeon(){
if(Player.getContainer().getName()!=="Start Dungeon?")return;

if(!this.confirmationCooldown&&World.getAllPlayers().filter((p)=>p.getPing()===1).length!==this.currPlayers&&!(World.getAllPlayers().filter((p)=>p.getPing()===1).length===1&&this.currPlayers===2)){
this.startButton.setText("\xA70Confirm starting Dungeon? (3s)");
this.startButton.desc.setText("\xA70("+World.getAllPlayers().filter((p)=>p.getPing()===1).length+"/"+this.currPlayers+" in dungeon)");
this.confirmationCooldown=Date.now()+3000;
return;
}
if(Date.now()<this.confirmationCooldown)return;

this.startButton.visable=false;
Player.getContainer().click(13,false,"MIDDLE");
}

ready(){
if(!Player.getContainer().getName().startsWith("Catacombs - Floor "))return;
this.playerReadyButton.setColor(150,150,150);
for(let i=0;i<5;i++){
if(ChatLib.removeFormatting(Player.getContainer().getStackInSlot(3+i).getName().split(" ").pop())===Player.getName())
Player.getContainer().drop(12+i,false);
}
}

clickedClass(classIndex){
if(!Player.getContainer().getName().startsWith("Catacombs - Floor "))return;

Player.getContainer().drop(2+4*9+classIndex,false);

this.classBoxes[classIndex].setColor(150,150,150);

if(this.currentPlayerClass!==-1)this.classBoxes[this.currentPlayerClass].setColor(253,255,227);
}

reset(){
this.startButton.visable=true;
this.playerReadyButton.setColor(255,150,150);

this.nameToId={};
this.nextId=0;
this.closeMenu=0;

this.startButton.setText("\xA70Start Dungeon");
this.startButton.desc.setText("");
this.confirmationCooldown=0;

this.readyBoxes.forEach((b)=>b.visable=false);
}

readyInOneSecond(){
this.closeMenu=Date.now()+1000;
}

tick(){
if(!this.soopyGui.ctGui.isOpen())return;

if(this.closeMenu>0&&Date.now()>this.closeMenu){
this.soopyGui.close();
Client.currentGui.close();
this.closeMenu=0;
return;
}

if(Player.getContainer().getName().startsWith("Catacombs - Floor ")){
this.startButton.visable=false;

let clickingClassButton=-1;

for(let i=0;i<5;i++){

if(Player.getContainer().getStackInSlot(3+i)){
if(ChatLib.removeFormatting(Player.getContainer().getStackInSlot(3+i).getName().split(" ").pop())===Player.getName()){
if(Player.getContainer().getStackInSlot(12+i)){
if(ChatLib.removeFormatting(Player.getContainer().getStackInSlot(12+i).getName())==="Ready"){
this.playerReadyButton.setColor(150,255,150);
}else{
this.playerReadyButton.setColor(255,150,150);
}
}else{
this.playerReadyButton.setColor(150,150,150);
}
}else{
let boxId=this.nameToId[ChatLib.removeFormatting(Player.getContainer().getStackInSlot(3+i).getName().split(" ").pop())];

if(boxId){
this.readyBoxes[boxId].setColor(255,150,150);
if(ChatLib.removeFormatting(Player.getContainer().getStackInSlot(12+i).getName())==="Ready")
this.readyBoxes[boxId].setColor(150,255,150);

this.readyBoxes[boxId].setLore(getLore(Player.getContainer().getStackInSlot(3+i)));
this.readyBoxes[boxId].setDesc("\xA70"+ChatLib.removeFormatting(getLore(Player.getContainer().getStackInSlot(3+i))[2]));
}
}
}



if(Player.getContainer().getStackInSlot(2+4*9+i)){
this.classBoxes[i].setColor(253,255,227);
if(Player.getContainer().getStackInSlot(2+4*9+i).getDamage()===10)
this.classBoxes[i].setColor(250,255,150);

this.classBoxes[i].
setText("\xA70"+Object.keys(this.classes)[i]+"\xA77 - "+ChatLib.removeFormatting(Player.getContainer().getStackInSlot(2+4*9+i).getName().split(" ")[0])).
setLore(getLore(Player.getContainer().getStackInSlot(2+4*9+i)));

let isPlayerClass=false;
getLore(Player.getContainer().getStackInSlot(2+4*9+i)).forEach((line)=>{
if(!ChatLib.removeFormatting(line).startsWith(" - "))return;
if(ChatLib.removeFormatting(line.split(" ").pop())===Player.getName())
isPlayerClass=true;
});

if(isPlayerClass){
this.currentPlayerClass=i;
this.classBoxes[i].setColor(150,255,150);
}
}else clickingClassButton=i;
}

if(clickingClassButton!==-1){
this.classBoxes[clickingClassButton].setColor(150,150,150);
if(this.currentPlayerClass!==-1)this.classBoxes[this.currentPlayerClass].setColor(253,255,227);
}
};

if(this.confirmationCooldown){
this.startButton.setText("\xA70Confirm starting Dungeon? ("+Math.ceil(Math.max(0,this.confirmationCooldown-Date.now())/1000)+"s)");
};

World.getAllPlayers().filter((p)=>p.getPing()===1).forEach((p)=>{
if(p.getUUID().toString()===Player.getUUID().toString())return;

if(p.getName()in this.nameToId)return;

this.nameToId[p.getName()]=this.nextId++;

this.readyBoxes[this.nameToId[p.getName()]].setText("\xA70"+p.getName()).visable=true;
});
}

guiOpened(event){
let name="";
if(event.gui&&event.gui.field_147002_h instanceof ContainerChest)
name=event.gui.field_147002_h.func_85151_d().func_145748_c_().func_150260_c();

if(this.soopyGui.ctGui.isOpen()){
if(!event.gui||!event.gui.field_147002_h)return;
Player.getPlayer().field_71070_bA=event.gui.field_147002_h;

if(!Player.getContainer().getName().startsWith("Catacombs - Floor "))return;

event.gui=this.soopyGui.ctGui;
this.soopyGui.ctGui.open();
return;
}

if(name==="Start Dungeon?"||name.startsWith("Catacombs - Floor ")){
if(event.gui&&event.gui.field_147002_h)Player.getPlayer().field_71070_bA=event.gui.field_147002_h;

this.soopyGui.open();
event.gui=this.soopyGui.ctGui;
}
}

keyPress(key,keyId){
if(keyId===1)

Client.currentGui.close();

if(keyId===18)
Client.currentGui.close();

}}


export default DungeonReadyGui;