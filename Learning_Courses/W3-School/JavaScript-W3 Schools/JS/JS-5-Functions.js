// JavaScript-Functions

// Functions
function function1(no1,no2){
    return no1+no2;
};
document.getElementById("tag1").innerHTML=function1(2,2);

// Local Varibles
function myfunction(){
    let example="String is Generated";
    document.getElementById("tag2").innerHTML=typeof example +" "+ example;
};
myfunction();

// ODJECTS
var details={Name:"Tamizha",lastname:"Vinoth",Degree:"B.E",age:22,fullname:function(){
    return this.Name +" "+this.lastname;
}};
document.getElementById("tag3").innerHTML=details.fullname(); //.name or .fullname() using , Note : fulname is not working
document.getElementById("tag4").innerHTML=details["age"];

// Strings And Objects
var name="Tamizha"; //Strings
var name2=new String("Tamizha") // Strings Objects
// == for value
// === for value and method
//  JavaScript objects cannot be compared.
















































// Alert for any error in JavaScript, Alert not work in window tab.
alert("NO ERROR IN JAVASCRIPT FILE");