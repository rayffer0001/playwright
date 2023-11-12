//Loops

// console.log("Hello world")
// console.log("Hello world")
// console.log("Hello world")
// console.log("Hello world")
// console.log("Hello world")

//for loop or for i loop
//for(statement1; statement2; statement3) {
//}

//initial
//when to stop
//what to do after each cicle

for (let i=0; i<5; i++){
    console.log("Hello world" + i)
}


//for of loop
var cars = ["volvo", "toyota", "tesla"]
for (let car of cars){
    console.log(car)

}

//If I want to interrupt before it finishes
var cars = ["volvo", "toyota", "tesla"]
for (let car of cars){
    console.log(car)
    if (car == "toyota")
        break

}

//ES6 syntax for each loop
cars.forEach( car => {
    console.log(car)
})