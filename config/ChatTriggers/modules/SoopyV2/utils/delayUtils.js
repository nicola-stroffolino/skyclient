const{default:FlatQueue}=require("../datastructures/flatqueue");

if(!global.delayThingSoopy){

let functionQueue=new FlatQueue;
let functions=new Map;
let functionId=0;

function delay(time,callback){
let id=functionId++;
functions.set(id,callback);
functionQueue.push(id,Date.now()+time);
}

register("tick",()=>{
while(functionQueue.length>0&&Date.now()>functionQueue.peekValue()){
let id=functionQueue.pop();

functions.get(id)();
functions.delete(id);
}
});

global.delayThingSoopy={
delay:delay};

}

module.exports=global.delayThingSoopy;