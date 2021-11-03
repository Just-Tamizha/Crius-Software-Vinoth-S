// Numbers
let num1=1e2;
document.getElementById("tag1").innerHTML=num1;

// is
let nam1="Tamizha";
let isNa=num1/nam1;
document.getElementById("tag2").innerHTML=isNaN(isNa);

// INFINITY and To understand Visirt site : https://pythontutor.com/
let num2=2;
let num3="";
while(num2 != Infinity){
    num2=num2*num2;
    num3=num3+num2+"<br>";
}
document.getElementById("tag3").innerHTML=num3;

// Numbers to Objects
// Number
let num4=200;
// Objects
let num41=new Number(200);

// HEAD--Numbers Methods

// Numbers to String
let num5=num4.toString(); // .valueOf is also Use 
document.getElementById("tag4").innerHTML=typeof num5;

// Exponential
let num6=200.50;
document.getElementById("tag5").innerHTML=num6.toExponential(3); // .toFixed  and to Precision also same as exponential

// The Number() Method Used on Dates
document.getElementById("tag6").innerHTML=Number(new Date())

alert("Linked");