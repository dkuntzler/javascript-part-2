"use strict";
{
let position = 0;
let direction= true;
let reverse = false;

function moveForward(forward){
if (reverse){
  forward -= position;
}else{
  forward += position;
}
}
function moveBackward(backward){
  if (reverse) {
    backward -= position;
  }else{
    backward += position;
  }


}

function turnAround(){
 reverse = !reverse;
}
function printLocation(){
  console.log();
}

moveForward(5);
moveBackward(3);
console.log(/* not sure what to put here*/);
turnAround();
moveForward(10);
moveBackward(5);
console.log(/* not sure what to put here*/);

}