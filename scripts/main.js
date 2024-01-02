//introduction
console.log("Hello world");
console.log("We are leraning javascript");
//window.alert("WE GOT THIS!");

//variables: a container for storing data
/*let age;...declaration
age = 21;...assignment*/
let firstname = "Angel";//strings
let age = 21;//numbers
let student = true//booleans
let number = "1";//string

age = age + 1;
number = number + 5;

console.log("Hello", firstname);
console.log("Youre probably", age, "this year");
console.log("Student?", student);
console.log(number);

document.getElementById("p1").innerHTML = "Hello " + firstname;
document.getElementById("p2").innerHTML = "youre probably " + age + " this year";
document.getElementById("p3").innerHTML = "Student? " + student;

//arithmetic expressions(operands, operators)
let students = 20;
student += 1; //students = students + 1;
students -= 1; //students = students -1;
students *= 2;//student = student * 2;
students /= 2;//students = students /2;
console.log(students);

//modulous: remainder
let extrastudents = students % 3;
console.log(extrastudents);

/*operator precedence
1. parenthesis()
2. exponents
3. multiplication & division
4. addition & subtraction
*/

let results = 1 + 2 * (3 + 4);
console.log(results);

//allow user input
/*let username = window.prompt("whats your name?");
console.log(username);*/

document.getElementById("mybutton").onclick = function(){
username = document.getElementById("mytext").value;
console.log(username)
document.getElementById("mylabel").innerHTML = "hello";
}

//type conversions
/*let ages = window.prompt("How old are you?");
console.log(typeof ages);
ages =Number(ages);
console.log(typeof ages);
ages += 1;
console.log("Youre now ", ages, "years old");*/

let x;
let y;
let z;

x = Number(1);
y = String(2);
z = Boolean("");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

//constants 
const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter radius of a curcumference");
radius = Number(radius);

circumference = 2 * PI * radius;
console.log("The circumference is:", circumference);

//mathematics
//let x = 5;
x = 2;
/*x = Math.round(x);
x = Math.floor(x);
x = Math.ceil(x);
x = Math.pow(x);
x = Math.sqrt(x);
x = Math.abs(x);*/
y = 5;
z = 7;
let maximum;
let minimum;

maximum = Math.max(x, y, z);
minimum = Math.min(x, y, z);
console.log(minimum);

console.log(Math.PI);