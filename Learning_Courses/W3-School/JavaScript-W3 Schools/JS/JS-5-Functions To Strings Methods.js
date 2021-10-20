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
var name2=new String("Tamizha"); // Strings Objects
// == for value
// === for value and method
//  JavaScript objects cannot be compared.


// STRING AND METHODS
let tamizha5="VinothProTamizha";
document.getElementById("str1").innerHTML=tamizha5.length;
document.getElementById("str2").innerHTML=tamizha5.slice(5,6); //U can use also negative valuem (-2,-4)
document.getElementById("str3").innerHTML=tamizha5.substr(5,4);

// Replace
function unction1(){
    var name45=document.getElementById("demo1").innerHTML;
    document.getElementById("demo1").innerHTML=name45.replace("change","Vinoth");
    // Upper case not work in replace because case senstitive
    // Capsletters/i means insenstive
    //Word/g means global (at same change all word into required word)
    // .toUpperCase() , .toLowerCase() also use !
};













// Alert for any error in JavaScript, Alert not work in window tab.
alert("NO ERROR IN JAVASCRIPT FILE");