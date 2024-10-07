import fetch from"../../SoopyV2/utils/networkUtils";import Promise from"../../PromiseV2";
const NBTTagString=Java.type("net.minecraft.nbt.NBTTagString");

let utils={
addLore:function(item,prefix,value){

const list=item.
getNBT().
getCompoundTag("tag").
getCompoundTag("display").
getTagMap().
get("Lore");

let done=false;

for(let i=0;i<list.func_74745_c();i++){
if(String(list.func_150307_f(i)).startsWith(prefix)){
list.func_150304_a(i,new NBTTagString(prefix+value));
done=true;
}
}
if(!done){
list.func_74742_a(new NBTTagString(prefix+value));
}

item.
getNBT().
getCompoundTag("tag").
getCompoundTag("display").
getRawNBT().
func_74782_a("Lore",list);
},



getLore:function(item,returnName=true){
let lore=returnName?[item.getName()]:[];
if(!item)return lore;

let loreNBT=item.getNBT()?.getCompoundTag("tag")?.getCompoundTag("display")?.getTagList("Lore",8);
if(loreNBT)for(let i=0;i<loreNBT["func_74745_c"]();i++){
lore.push(loreNBT["func_150307_f"](i));
}

return lore;
},
getSBID:function(item){
return item?.getNBT()?.getCompoundTag("tag")?.getCompoundTag("ExtraAttributes")?.getString("id")||null;
},
getSBUUID:function(item){
return item?.getNBT()?.getCompoundTag("tag")?.getCompoundTag("ExtraAttributes")?.getString("uuid")||null;
},
getSBEnchant:function(item,enchant){
return item?.getNBT()?.getCompoundTag("tag")?.getCompoundTag("ExtraAttributes")?.getCompoundTag("enchantments")?.getInteger(enchant)||null;
},
calculateDistance:function(p1,p2){
var a=p2[0]-p1[0];
var b=p2[1]-p1[1];
var c=p2[2]-p1[2];

let ret=Math.hypot(a,b,c);

if(ret<0){
ret*=-1;
}
return ret;
},
calculateDistanceQuick:function(p1,p2){
var a=p2[0]-p1[0];
var b=p2[1]-p1[1];
var c=p2[2]-p1[2];

let ret=a*a+b*b+c*c;

if(ret<0){
ret*=-1;
}
return ret;
},









fastestPathThrough:function(startPoint,points){
let ret=[];
while(ret.length<points.length){
ret.push(ret.length);
}

let allOrders=utils.permutation(ret);

let lastOrder=[];
let lastOrderLength=Infinity;

for(let i=0;i<allOrders.length;i++){
let order=allOrders[i];
let lastPoint=startPoint;
let positions=order.map((a)=>{
return points[a];
});
let len=0;
for(let i=0;i<positions.length;i++){
len+=utils.calculateDistance(lastPoint,positions[i]);
lastPoint=positions[i];
}

if(len<lastOrderLength){
lastOrder=order;
lastOrderLength=len;
}
}

return lastOrder;
},
permutation:function(array){
function p(array,temp){
var i,x;
if(!array.length){
result.push(temp);
}
for(i=0;i<array.length;i++){
x=array.splice(i,1)[0];
p(array,temp.concat(x));
array.splice(i,0,x);
}
}

var result=[];
p(array,[]);
return result;
},
toMessageWithLinks:function(text,color="f"){
return text.split(" ").reduce((c,curr)=>{
if(curr.match(/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm)){
c.push(curr);
c.push("&"+color);
}else{
c[c.length-1]+=(c[c.length-1].length===2?"":" ")+curr;
}
return c;
},["&"+color]).map((a)=>{
if(a.match(/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm)){
return new TextComponent("&"+color+"&n"+a+"&"+color+" ").setHover("show_text","Click to open "+a.trim().replace(/^(?:[&§][0-9a-fmn])+|(?:[&§][0-9a-fmnr])+$/g,"")).setClick("open_url",a.trim().replace(/[&§][0-9a-fmnr]/g,""));
}else{
return new TextComponent(a+" ");
}
}).reduce((c,curr)=>c.addTextComponent(curr),new Message);
},
formatTime:function(time){
let days=Math.floor(time/(24*60*60*1000));
time-=days*24*60*60*1000;
let hours=Math.floor(time/(60*60*1000));
time-=hours*60*60*1000;
let minuites=Math.floor(time/(60*1000));
time-=minuites*60*1000;
let seconds=Math.floor(time/1000);
time-=seconds*1000;

return`${days?days+"d ":""}${hours+days?hours+"h ":""}${minuites+hours+days?minuites+"m ":""}${seconds+minuites+hours+days?seconds+"s ":""}`.trim();
},
uuidFromUsername:function(name){return Promise.resolve().then(()=>{return Promise.resolve().then(()=>{return(

fetch(`https://api.mojang.com/users/profiles/minecraft/${name}`).json())}).then((_resp)=>{let{id}=_resp;
return id}).catch((
e)=>{return(()=>{
return null})()})}).then(()=>{})}};




module.exports=utils;