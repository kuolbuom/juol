
let person ={
    name:'kuol',
    age:34
}
console.log(person)

person.name='mary';


person['name']='john'; 
console.log(person.name)

function greet(name,lastName){
    console.log('hello ' + name +' '+lastName)
}greet('mary','kuol');

function square(Number){
    return Number*Number
    
}
   let number =square(2)
console.log(number);

//let cuont=0
let myAge =34;
console.log(myAge)

let cuon =5/7
console.log(cuon)

let firstBatch = 5
let secondBatch =7
let cuo =firstBatch+secondBatch
console.log(cuo)

let myAg=35
let humanDogRatio =7
let myDogAge=myAg*humanDogRatio
console.log(myDogAge)

let cu =5
cu=4
cu=3
cu=2
cu=1
console.log(cu)

let bonusPoints=50
console.log(bonusPoints)
bonusPoints +=50
console.log(bonusPoints)
bonusPoints -=75
console.log(bonusPoints)
bonusPoints +=45
console.log(bonusPoints)

let day;
        switch(new Date().getDay()){
            case 0: day ='sunday'; break;
            case 1: day ='monday';  break;
            case 2: day ='tueday';  break;
            case 3: day ='wednesday';break;
            case 4: day = 'thursday'; break;
            case 5: day ='friday';   break;
            case 6: day ='sutarday'; break;
        }console.log(day)

        let month;
        switch(new Date().getMonth()){
            case 0: month ='january'; break;
            case 1: month ='fabruary'; break;
            case 2: month ='march'; break;
            case 3: month ='afril'; break;
            case 4: month ='may'; break;
            case 5: month ='june'; break;
            case 6: month ='july'; break;
            case 7: month ='august'; break;
            case 8: month ='september'; break;
            case 9: month ='october'; break;
            case 10: month ='november'; break;
            case 11: month ='december'; break;
}console.log(month)

function cuont(){
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
}cuont()


function myLogger(){
console.log(42)
}
myLogger()

let lap1 = 34
let lap2 = 33
let lap3 = 36
// let totalTime =lap1+lap2+lap3

function loglapTime(){
    // let totalTime = lap1+lap2+lap3
    console.log(lap1+lap2+lap3)
}loglapTime()

// let userName = 'per';
//console.log(userName)

let userName ='kuol'
let message = 'you have three new notifications '
//console.log(message +' '+ userName + ' !')


let messageToUser = message + userName 
console.log(messageToUser +' !')
//console.log(messageToUser + ' !')

let name ='kuol Buom Patai'
let greeting = 'Hi my name is '
let myGreeting = greeting + name
console.log(myGreeting)

let nam = 42
let greting = 'Hi my name is '
let myGreting= greting + nam
console.log(myGreting)

let point = 4
let bonusPoint ='10'
let totalpoint = bonusPoint+point
console.log(totalpoint)

console.log(4+5)
console.log('2'+'4')
console.log('5'+1)
console.log(100+'1000')





