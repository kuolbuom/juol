

//instead

//const cars =['volvo','toyota','mercidis','farado','v8','bmw','ford','benson'];
//let Text =''
//Text+= cars[0]+' ';
//Text+= cars[1]+' ';

// for(let i =0; i <cars.length; i++){
//     Text += cars[i]+  ' ';
// }console.log(cars)
// document.getElementById('loop').innerHTML=Text
// let num = + '12' + 12
// let num2 = + '14' + 14
// if(num===num2){
//     console.log('they are equal')
// }else{
//     console.log('they are not equal')
// }

// //for in loop
// const person ={
//     fname: 'omar',
//     middleName:'Adam',
//     lastName:'Osman',
//     age: 33,
//     Address:'Kakuma',
//     country:'Kenya',
//     status:'married'
// }
// let Text ='';
// for(let x in person){
//     Text+=person[x]+' ';
// }
// console.log(person)

// const cars =['volvo','toyota','bmw','marcidis','hamor']
// let Text =' ';
// for(let x of cars){
//     Text+=cars
// }
// console.log(cars)

//while loop
// const cars =['bmw','toyota','marcidis','volvo','saba']
// let i= 0;
// let Text ='';

// while(cars[i])+ '<br> ' + i++
// console.log(cars)


// for loops
// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// let text = "";
// for (let i = 0; i < cars.length; i++) {
//   text += cars[i] + "<br>";
// }console.log(cars)


// // for loops
// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// let text = "";
// for (let i = 0; i < cars.length; i++) {
//   text += cars[i] + "<br>";
// }

// let text = "";

// for (let i = 0; i < 5; i++) {
//   text += "The number is " + i + "<br>";
// }


// // for in loops

// const person = {fname:"John", lname:"Doe", age:25}; 

// let txt = "";
// for (let x in person) {
//   txt += person[x] + " ";
// }

// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// for (let x in numbers) {
//   txt += numbers[x] + "<br>"; 
// }

// // for of loops

// const cars = ["BMW", "Volvo", "Mini"];

// let text = "";
// for (let x of cars) {
//   text += x + "<br>";
// }

// let language = "JavaScript";

// let text = "";
// for (let x of language) {
//   text += x + "<br>";
// }

// while loops

// let text = "";
// let i = 0;
// while (i < 10) {
//   text += "<br>The number is " + i;
//   i++;
// }

// let text = "";
// let i = 0;

// do {
//   text += " The number is" +' '+ i;
//   i++;
// }
// while (i < 10);  
// console.log(text)
// let text ='';
// let i= 0;
// for(let i =0;i<10; i++){
//   text += 'the number is'+ i +' ';
// }console.log(text)

// let text ='';
// let i=0;
// for(let i=0; i<50; i++){
//    if(i===3){continue}
//    text +='the number is '+ i +' ';
// }console.log(text)


// // for loops
// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// let text = "";
// for (let i = 0; i < cars.length; i++) {
//   text += cars[i] + "<br>";
// }

// let text = "";

// for (let i = 0; i < 5; i++) {
//   text += "The number is " + i + "<br>";
// }


// // for in loops

// const person = {fname:"John", lname:"Doe", age:25}; 

// let txt = "";
// for (let x in person) {
//   txt += person[x] + " ";
// }

// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// for (let x in numbers) {
//   txt += numbers[x] + "<br>"; 
// }

// // for of loops

// const cars = ["BMW", "Volvo", "Mini"];

// let text = "";
// for (let x of cars) {
//   text += x + "<br>";
// }

// let language = "JavaScript";

// let text = "";
// for (let x of language) {
//   text += x + "<br>";
// }

// // while loops

// let text = "";
// let i = 0;
// while (i < 10) {
//   text += "<br>The number is " + i;
//   i++;
// }

// let text = ""
// let i = 0;

// do {
//   text += "<br>The number is " + i;
//   i++;
// }
// while (i < 10);  





// while looos with do

// let text = ""
// let b = 0;

// do {
//   text += "<br>The number is " + b;
//   b++;
// }
// while (b < 10); 

// // while loops with break

// let text = "";
// for (let i = 0; i < 10; i++) {
//   if (i === 3) { break; }
//   text += "The number is " + i + " ";
// }console.log(text)

//iterable method
const names =['kuol','daude','renate','teacher'];
let text ='';
let x =0;
for(const x of names);{
  text += x + '<break>';
}


const teachers =['omar','mahdi','gatbel','adam','osman'];
const all =teachers.concat(names)
//let text ='';
for(const y of all){
text += y +'<break> ';
}
console.log(all)

const food =([
  ['fish',1000],
  ['checken',1500],
  ['ogali',200],
  ['beep',300]

])
let text2 ='';
for(const b of food){
  text2 +=b+'<break> ';
}
 console.log(food)

 //sets

 const letters = new Set();
 letters. add('a');
 letters.add('b');
 letters.add('c');
 letters.add('d');

 console.log(letters.size)
  // document.getElementById('dom').innerHTML=