class movie {
    constructor(title,studio,rating){
        this.title  = title;
        this.studio = studio;
        this.rating = rating;
    
    if(rating ==null){
            return this.rating = "PG";
    }else{
            return this.rating = rating;
    }
}

}

let movie1 = new movie("Lucy","EuropaCorps");
let movie2 = new movie("Gravity","Heyday Flims",);
let movie3 = new movie("Inception","Warner Bros","PG14");
let movie4 = new movie("Casino Royal","Eon Productions","PG13");
console.log(movie1);
console.log(movie2);
console.log(movie3);








//create the class person to hold details
class person{
    constructor(name,dateofbirth,address,email,phone,degree,){
        this.name = name;
        this.dateofbirth = dateofbirth;
        this.address = address;
        this.email = email;
        this.phone = phone;
        this.degree = degree;

    }
}

let person1 = new person("ram","13.05.1994","salem","9566766563","BE");
let person2 = new person("venkat","15.07.1995","erode","8526368266","ITI");

