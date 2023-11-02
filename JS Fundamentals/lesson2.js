//Concatination and Interpolation

var price = 50
var itemName = "cup" 
var messageToPrint1 = "The price for your "+ itemName +" is "+price+" dollars" //Concatination
var messageToPrint2 = `The price for your ${ itemName } is ${ price} dollars` //Interpolation
console.log(messageToPrint1)
console.log(messageToPrint2)
