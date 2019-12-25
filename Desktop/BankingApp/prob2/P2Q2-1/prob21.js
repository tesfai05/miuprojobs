const Car={
    make:"",
    model:"",
    color:"",
    drive:function(speed){
        console.log(`The [${this.color}] [${this.make}] [${this.model}] is driving at[${speed}] mph.`);
        
        },
    stop:function(){
        console.log(`The [${this.color}] [${this.make}] [${this.model}] is stoping.`);    

    }

}

const RedHondaAccord=Object.create(Car);
RedHondaAccord.color="Red";
RedHondaAccord.model="Accord";
RedHondaAccord.make="Honda";
RedHondaAccord.drive(200);