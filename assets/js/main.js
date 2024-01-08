//Variables

let 
kmAmountElement = document.getElementById ("kmAmount"), 
psgAgeElement = document.getElementById ("psgAge")

//Const
const kmPrice = 0.21;
const discountUnder = 20
const discountOver = 40

// kmAmount = 40
// psgAge = 19

let kmAmount, psgAge;

let calcButton = document.getElementById 
("submitValues");

let resetButton = document.getElementById("reset-all")

let result = document.getElementById 
("resultPrice");

let name = document.getElementById ("name")

function getName(){
    
    resultName.innerHTML = getName
}

//Function that takes the name from the input and puts it into the ticket



//Function allowing numeric values to be put into input areas

function getValues(){
    
//Assigning variables values based on input areas numeric results

    kmAmount = kmAmountElement.value;

    psgAge = psgAgeElement.value;

    console.log (kmAmount, psgAge)
}


let finalPrice 

// function that calculates the discount amount

function priceCalc (firstElement, secondElement){
    let fullPrice = firstElement*kmPrice

    return fullPrice - (fullPrice * secondElement / 100)
}


//Function that checks the passenger's age

function finalPriceCalc(){
    if (psgAge < 18) {
        finalPrice = priceCalc (kmAmount, discountUnder);
    }   
    else if (psgAge > 65){
        finalPrice = priceCalc (kmAmount, discountOver);
    }   
    else {
        finalPrice = kmAmount * kmPrice;
    }
}

// Method allowing to submit values for price calculation

calcButton.addEventListener("click", function (){
    getValues()
    finalPriceCalc()
    console.log (finalPrice)
    resultPrice.innerHTML = finalPrice.toFixed(2) + "€"
})

//Method allowing to reset all the values

resetButton.addEventListener("click", function (){
    kmAmountElement.value = 0
    psgAgeElement.value = 0
    resultPrice.innerHTML = ""
})



