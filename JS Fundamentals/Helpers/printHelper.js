export function printAge(age){
    console.log(age)
}

class CustomerDetails {
    printFristName(firstName){
        console.log(firstName)
    }
    
    printLastName(lastName){
        console.log(lastName)
    }
}

export const customerDetails = new CustomerDetails();