/*
8 Kyu
Broken Counter

Description:
Our counter prototype is broken. Can you spot, what's wrong here?

function Counter() {
  this.value = 0;
}

Counter.prototype.increase() {
  this.value++;
};

Counter.prototype.getValue() {
  return this.value;
};

Counter.prototype.reset() {
  this.value = 0;
};

*/

class Counter{
    constructor(value){
        this.value = 0;
    }
    increase(){
        return this.value++;
    }
    getValue(){
        return this.value;
    }
    reset(){
        this.value = 0
    }
}