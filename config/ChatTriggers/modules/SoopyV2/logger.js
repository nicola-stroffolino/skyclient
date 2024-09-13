


class Logger{
constructor(){
this.isDev=isDev();
this.loglevel=this.isDev?3:2;
this.logToMcChat=false;
this.logPrefixes=[
"[SOOPYADDONS]       ",
"[SOOPYADDONS:ERROR] ",
"[SOOPYADDONS:WARN]  ",
"[SOOPYADDONS:INFO]  ",
"[SOOPYADDONS:DEBUG] "];

this.logMessage("Logger initialised",3);
}

logMessage(message,level){
if(level<=this.loglevel){
console.log(this.logPrefixes[level]+message);
if(this.logToMcChat){
ChatLib.chat(this.logPrefixes[level]+message);
}
}
}}

let devs=["dc8c39647b294e03ae9ed13ebd65dd29"];

function isDev(){
return devs.includes(Player.getUUID().toString().replace(/-/g,""));
}


if(!global.soopyv2loggerthing){
global.soopyv2loggerthing=new Logger;

register("command",()=>{
devs.push(Player.getUUID().toString().replace(/-/g,""));
global.soopyv2loggerthing.isDev=isDev();
global.soopyv2loggerthing.loglevel=4;
global.soopyv2featuremanagerthing.isDev=isDev();
}).setName("pleasegivemeaccesstosoopyv2devconsolelogs",true);
register("command",()=>{
global.soopyv2loggerthing.logToMcChat=!global.soopyv2loggerthing.logToMcChat;
ChatLib.chat("logToMcChat now "+global.soopyv2loggerthing.logToMcChat);
}).setName("soopyv2loggerchat",true);

register("gameUnload",()=>{
global.soopyv2loggerthing=undefined;
});
}
export default global.soopyv2loggerthing;