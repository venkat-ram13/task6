class circle {
    constructor(radius,color) {
        this.radius = radius;
        this.color = color;
    }
    getRadius(){
        if(this.radius <=0){
            return "Error"
        }else{
            return (`Radius is ${this.radius}`);
        }
    }
    getColor(){
        return (`color is ${this.color}`);
    }
    getArea(){
        return (`area = ${3.14*(this.radius*this.radius)}`);
    }
    getCircumference(){
        return (`circumference = ${2*3.14*this.radius}`);
    }
     
}
let circle1 = new circle(2.0,"red");
let circle2 = new circle(3.0,"yellow");
let circle3 = new circle(7.0,"green");

console.log(circle1.getArea());
console.log(circle2.getCircumference());