// trim()
let firstname = "        AvadhutVarvatkar           ";
// by use of trim we can remove the spaces in the sting
//  trim() allwise create new variable 
console.log(firstname.length);
firstname = firstname.trim();
console.log(firstname);
console.log(firstname.length);
// to uppercase()
firstname = firstname.toUpperCase();
console.log(firstname);
// tolowercase()
firstname = firstname.toLowerCase();
console.log(firstname);
// to print range of word in string is used slice()
// starting index 
// ending index
console.log(firstname.slice(3,9));