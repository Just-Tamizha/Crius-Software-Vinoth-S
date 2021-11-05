// ARRAYS

// Array List with for-loop
let list=["Tamizha","Vinoth","Sudha"];
let listlen=list.length;
let list1="<ul>";
for(let i=0;i<listlen;i++){
    list1+="<li>"+list[i]+"</li>";
}
list1+="</ul>";
document.getElementById("tag1").innerHTML=list1;

// Array List with for-each
let text = "<ul>";
list.forEach(myFunction);
text += "</ul>";
document.getElementById("tag2").innerHTML = text;
function myFunction(value) {
  text += "<li>" + value + "</li>";
}

// Array Parameters Problem
let text1=new Array(40);
// Without Parameter
document.getElementById("tag3").innerHTML=text1;
// With Parameter
document.getElementById("tag4").innerHTML=text1[0];

// Array Methid
// Array to string
document.getElementById("tag5").innerHTML=list.toString();

// Join Function
document.getElementById("tag6").innerHTML=list.join("*");

// Splice
list.splice(1,2,"Element Add");
document.getElementById("tag7").innerHTML=list;

// RE-Assign Value
list=["Tamizha","Vinoth","Sudha"];
let num2=[50,40,70,80];

// Numeric sort
document.getElementById("tag8").innerHTML=num2.sort(function(a,b){return a-b});

























alert("Linked");