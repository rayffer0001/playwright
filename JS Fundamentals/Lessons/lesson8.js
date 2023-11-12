//functions, are use to organize the code to reusable components

//Declarative functions
function helloOne() {
    console.log("hello One");
}

helloOne()

//Anonimus functions = It is only executed after the fuction is declared
var helloTwo = function(){
    console.log("hello Two");
}

helloTwo()

//ES6 function sytax or arrow functions
var helloThree = () => {
    console.log("hello Three");
}

helloThree()

//Function with arguments

function printName(name, lastName) {
    console.log(name + ' ' + lastName);
} 
printName('Rayffer', 'Rua')


//Function with return
function multplyByTwo(number){
    var result = number * 2;
    return result
}

var myResult = multplyByTwo(20);
console.log(myResult);

//Import function
import {printAge} from '../Helpers/printHelper.js'
printAge(5)

//Import everything
import * as helper from '../Helpers/printHelper.js'
helper.printAge(10)