// JAVASCRIPT-STATEMENT

// LET(METH)
let x,y,z;
x=10;y=2;z=x+y;
document.getElementById("tag1").innerHTML="The sum of some value is "+z;

// CODE BLOCKS
function tag2(){
	document.getElementById("tag2").innerHTML="Code Blocks ONE is Executed";
	document.getElementById("tag21").innerHTML="Code Blocks TWO is Executed";
}

// JAVASCRIPT-VARIBLES
	
// UNDEFINED
var Tamizha;
document.getElementById("tag3").innerHTML=Tamizha;

//RE-DECLARING VALUE
var Tamizha1="Value is Assigned";
var Tamizha1;
document.getElementById("tag31").innerHTML=Tamizha1;

//ARITHMETIC
var Tamizha2="String"+5+5;
var Tamizha21=5+5+"String";
document.getElementById("tag4").innerHTML=Tamizha2;
document.getElementById("tag41").innerHTML=Tamizha21;

// JAVASCRIPT-LET

//LET HOISTING
name ="Tamizha";
var name;
document.getElementById("tag5").innerHTML=name;
//name1="Tamizha1"; // This Line cannot be executed "let" is case senstitive
let name1;
name1="Tamizha1";
document.getElementById("tag51").innerHTML=name1;

// JAVASCRIPT- CONST

// CONST TRY AND CATCH
try{
	const name2="Tamizha2";
	//name2=10;
	document.getElementById("tag6").innerHTML=name2;
}catch(Error){
	document.getElementById("tag6").innerHTML=Error;	
}

// CONST REPALCE AND ADD IN ARRAY !
const names=["Name-1","Name-2","Name-3",10];
names[0]="Name Changed";
names.push("Name Added");
document.getElementById("tag7").innerHTML=names;

//CONSTANT OBJECTS
const details={Name:"Tamizha",Age:"22",Color:"White"};
details.Name="Vinoth";
details.Gender="Male";
document.getElementById("tag8").innerHTML=details.Name+" was "+details.Age+" Older and "+details.Color+" Color and his gender was "+details.Gender;


// JAVASCRIPT-ARITHMETIC


// SQUARE ROOT
let xx=5**3;
let yy=Math.pow(5,2);
document.getElementById("tag9").innerHTML=xx;
document.getElementById("tag91").innerHTML=yy;


// JAVASCRIPT-DATA TYPES


// EXPONENTIAL
let x1=15e2;
let x2=15e-2;
document.getElementById("tag10").innerHTML=x1;
document.getElementById("tag101").innerHTML=x2;

// TYPE OF ( UNDEFINED )
let car;
document.getElementById("tag11").innerHTML=typeof "Print the Type"+"<br>" +typeof 10 +"<br>"+typeof car;

// BOOLEANS
let no1=1,no2=3;
document.getElementById("tag12").innerHTML=no1==no2;

//ARRAYS
let array=["Name","Name2","Name3"];
// OBJECTS
let object={Name:"Tamizha",Age:22,Gender:"Male"};
document.getElementById("tag13").innerHTML=array[0]+object.Gender;









// Alert for any error in JavaScript, Alert not work in window tab.
alert("NO ERROR IN JAVASCRIPT FILE");