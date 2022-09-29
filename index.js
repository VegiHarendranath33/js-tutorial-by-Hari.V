// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h5> what is reactjs <br>

reactjs is A JAVASCRIPT library  used to develop user  Interface component <br>
Basic requirements :

1.HTML
2.css                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
3.Javascript (Es6) <br>

Fundamental concepts:
Variable Declaration
Data Types
Arrays and Objects 
Functions
Conditional Statements
Looping Concept


Variable Declaration:
<br>

playcode.io/new
<br>
after  es5 let and const have been introduced 
<br>
var was used to declare a variable<br>
variable declaration //<br>
var  name = 'hari';
console.log(name);<br>
4 data types
//number string boolean undefined
<br>
==============================
var data = 1;
// var data = 1.5;
<br>
// var data = "hari"
console.log(typeof data);  ans: number.
======================
<br>
when u are trying to store any characters enclosed in single quotes or double quotes are called as string.
boolean is used to store only 2 types of values.
one is true and another one is false.
true: satisfying Condition
false: unsatisfying Condition <br>
====================================<br>
var data = true;  // t should not be capital letters if u give capital letter it says true is not defined
console.log(type of data)
ans : boolean
======<br>
var data;  we are defining a variable and we are not assigning any value then we get <br>
the console.log(typeof data);  as undefined.it is telling as object.<br>
====<br>
<br>
variables 
data types
Arrays and objects
===================<br>
upto know we stored in one variable only one value
but in arrays we can store in one variable multiple values:
<br>
===
<br>
var data = [1,2,3,4,5 ];
console.log(data);
Every thing in array is storing in  oth position 
1 is oth index
based on index it occupies its position.
===================================
console.log(data[0]);
<br>
===
object is nothing but storing data in terms of name and value 
or key and value.
<br>
name - value
key  - value 
<br>
name
john  age=30
<br>
var data  = {
   name : 'HarendranathVegi';
   age : 44;
   console.log(data.age);
}
<br>
we are accessing  name property in  data object.
<br>
similiarly we are access age property in data object.
<br>
================================
<br>
Functions: function is nothing but used to perform a specific task in a block of code is called function
---<br>
func user() {
  <br>
   //block of code  we can write the action inside the function
}
<br>
user();<br>
func smh() {
   console.log('smh members are sudarshan hari anjan')
}<br>
<br>
smh();
<br>
====<br>
function user willbe executed whenever we are calling a block of code 
<br>
func user() {
   console.log('Hi Hari');
}
user();
=================
<br>
func hari(sal)
{
   return sal + 5;
}
var output = hari(2100000);
console.log(output);
<br>
====
</h5>`;
