import{AI_STATE,ANIMATION_STATE}from"../states.js";





export default function(pet){
let distMult=2*Math.sqrt(pet.settings.scale);
distMult=Math.max(0.5,distMult);

let distToOwner=pet.getDistanceTo(pet.followingPlayer.getX(),pet.followingPlayer.getY(),pet.followingPlayer.getZ());
pet.state=ANIMATION_STATE.STANDING;

if(distToOwner>10*distMult||Math.random()>0.99){
let x=pet.followingPlayer.getX()+Math.random()*10*distMult-5*distMult;
let z=pet.followingPlayer.getZ()+Math.random()*10*distMult-5*distMult;
let y=Math.round(pet.followingPlayer.getY());
let i=0;
while(!World.getBlockAt(x,y,z).getType().getID()&&i++<10)y--;
while(World.getBlockAt(x,y,z).getType().getID()&&i++<10)y++;

if(i>=10)y=Math.round(pet.followingPlayer.getY());

pet.aiState=AI_STATE.TRAVELING_TO_POSITION;
pet.travelToPosition=[x,y,z];
}else if(Math.random()>0.995||pet.nextIsFlip){
pet.state=ANIMATION_STATE.FLIPPING;
pet.nextIsFlip=false;
}else if(Math.random()>0.9995){
pet.aiState=AI_STATE.FLIPPING;
}
}