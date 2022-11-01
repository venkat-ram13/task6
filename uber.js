class uber {
    constructor(distance,price,timedelay){
        this.distance = distance;
        this.price = price;
        this.timedelay = timedelay;
    }
    getDetails(){
        return (`The charge for the ride is ${this.price} for the ${this.distance} with the ${this.timedelay} `);
    }
   getPrice(){
        return (this.distance*this.price + 3* this.timedelay)
   } 
}
let uber1 = new uber(400,12,60);
let uber2 = new uber(500,12,120);
let uber3 = new uber(700,12,180);




console.log(uber1.getDetails());
console.log(uber2.getPrice());
console.log(uber3.getDetails());