//? Premetive datatypes
//! Bigint,number,string,boolean,null,undefined,Symbol

const number=123;
let Name="Akash";
let isLoggedIn=false;
let city;
let country=null;
let bigNumber=123n;
const id=Symbol("123");

console.table([typeof number,typeof isLoggedIn,typeof city,typeof country,typeof bigNumber,typeof id]);


//?Reference (Non primitive)
//! Array,object,function

const heros=["Spiderman", "Batman","Aquaman","Superman"];

let user={
    name:"Akash",
    age:25,
    city:"Bangalore"
}
console.log(user);
console.table([user.name,user.age,user.city]);


const myFunction=function(){
console.log("Hello world!");
}



// * stack(primative) heap(Non primitive)


let myname="Akashraj"
let myname2=myname;
myname2="Rajakash";
console.log(myname2);
console.log(myname);

let userone={
    email:"akashrajnitrr@gmail.com",
    upi:"rajakash@okaxis"
}
let usertwo=userone;

console.table([userone]);
usertwo.email="rajakash7001@gmail.com";
console.table([userone]);