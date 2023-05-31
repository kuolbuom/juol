

const cars = ['toyota', 'marcidis', 'bmw', 'volvo','parado','gondata'];
const animal =['cat','goat','camel','dog', 'gorillas']
const countries =['sudan','southsudan','kenya','ethiopia','chad','comeron'];
const bboth =cars.concat(animal,countries)
console.log(bboth)
cars[3]= 'v8';
cars.push("adam");
cars[0]=('volvo');
cars.push('parado')


cars.shift()

cars.pop()


cars.unshift('marcidis')

cars.indexOf('marcidis')
console.log(cars)
console.log(cars)
console.log(cars.length)
const tcar ={type:'volvo', model:'v5000', color:'green',price:'$2000,000'}; 
console.log(tcar)
const sname={
    myname:'kuol',
    age: 34,
    fname: 'omar',
    mname: 'ahmed',
    edulevel: 'univesity',
    status: 'occupied',
    country: 'sudan'};

const kpeople ={
    fname: 'achut',
    mname: 'mijok',
    lname: 'athian',
    age: 30,
    edulevel: 'univesity',
    status: 'unoccupied',
    country: 's sudan',
    resident: 'kenya'};

console.log(kpeople)







let day;
        switch(new Date().getDay()){
            case 0: day ='sunday'; '<br>'
            case 1: day ='monday';  '<br>'
            case 2: day ='tueday';  '<br>'
            case 3: day ='wednesday';'<br>'
            case 4: day = 'thursday'; '<br>'
            case 5: day ='friday';   '<br>'
            case 6: day ='sutarday'; '<br>'
        }
    //document.getElementById('switch').innerHTML ='Today is ' + day
console.log(day)









