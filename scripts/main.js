//introduction
console.log("Hello world");
console.log("We are leraning javascript");
window.alert("WE GOT THIS!");

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
