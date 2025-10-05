//type conversion and type coersion 
console.log('welcome to tut2');
let myVar; 
myVar = String(34);
console.log(myVar, (typeof myVar));

let boolenVar = String(true);
console.log(boolenVar, (typeof boolenVar));

let date = String (new Date());
console.log(date, (typeof date));

let arr = String ([1,2,3,4,5,6]);
console.log(arr.length, (typeof arr));

let i =775;
console.log(i.toString);

let stri = Number("1234");
stri = Number("123g3");
stri = Number(true);
stri = Number([1,2,3,4]);
console.log(stri,(typeof stri));

let number = parseFloat('34.89');
console.log(number.toFixed(3), (typeof number)); 
 