"use strict"
function  Car(){
    this.make="default"
    this.model="default";
    this.color="default";
    
}
Car.prototype.drive=function(speed){
    console.log(`The [${this.color}] [${this.make}] [${this.model}] is driving at ${speed} mph `);
}
Car.prototype.stop=function(){
    console.log(`The [${this.color}] [${this.make}] [${this.model}] is stopping`);
}

const RedHandoAccord=new Car();
RedHandoAccord.color="red";
RedHandoAccord.make="Honda";
RedHandoAccord.model="Accord";
// Invoke the drive method on RedHandoAccord wz speed value of 300
RedHandoAccord.drive(300);