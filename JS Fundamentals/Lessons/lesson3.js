//Objects
var customer = {
    firstName: 'John',
    lastName: 'Rua'
}

console.log(customer)
console.log(customer.lastName)
console.log(customer['lastName'])

customer.firstName = 'Ray'
console.log(customer.firstName)
console.log(`${customer.firstName} ${customer.lastName}`)


//Array: list of items

var car = ["volvo", "toyota", "tesla"]
console.log(car[0])
car[1] = "BMW"
console.log(car[1])