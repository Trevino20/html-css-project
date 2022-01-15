// typesof operator - its is give the data of the variable.
let age = 33; 
let nameee = "avadhut";
console.log(typeof age);
console.log(typeof nameee);
// convert number to string
console.log(typeof(age + ""));
age = age + "";
console.log( typeof age);
// convert strig to number
nameee = Number(nameee)
console.log(typeof nameee);
age = String(age);
console.log(typeof age);
// 
// 
// string concatenation
let string1 = "avadhut";
let string2 = "varvatkar";
let fullname = string1 + " " + string2;
console.log(fullname);
//  
let num1 = "12";
let num2 = "23";
let num3 = +num1 + +num2;
console.log(num3);
// template string
template = `my name is ${string1} and age is ${num2}`
console.log(template);
// undefined