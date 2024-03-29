//Variables

let 
kmAmountElement = document.getElementById ("kmAmount"), 
psgAgeElement = document.getElementById ("psgAge")

//Const
const kmPrice = 0.21;
const discountUnder = 20
const discountOver = 40

//Declaring variables for amount of KM and passenger age
let kmAmount, psgAge;

//Declaring value for submit button
let calcButton = document.getElementById 
("submitValues");

//Declaring variable for reset button
let resetButton = document.getElementById("reset-all");

//Declaring variable for price result
let result = document.getElementById
("resultPrice");

//Declaring the variable for ticket result (if discounted or not)
let resultTicket = document.getElementById("resultTicket");

//Declaring the variable resultName that comes from the input area
let resultName = document.getElementById("resultName");

//Function that randomized the number of the coach (carriage actually)
function generateCoachNumber() {
    return Math.floor(Math.random() * 20) + 1;
}

//Function that randomized the number of CP code
function generateCPNumber() {
    return Math.floor(Math.random() * 10000) + 1;
}

//Function allowing numeric values to be put into input areas
function getValues(){ 

    //Assigning variables values based on input areas numeric results
    kmAmount = kmAmountElement.value;
    psgAge = psgAgeElement.value;
    console.log (kmAmount, psgAge);
    
    //Name function
    let passengerName = document.getElementById("name").value;
    resultName.innerHTML = passengerName || "Scrivi il tuo nome e cognome nell'area di input";

    //Function that checks if the camps are compiled
    if (kmAmount == 0 || psgAge == "default" ){
        requirements.classList.toggle ("d-none")
    }
    
}

let finalPrice 

// Function that calculates the discount amount

function priceCalc (firstElement, secondElement){
    let fullPrice = firstElement*kmPrice

    return fullPrice - (fullPrice * secondElement / 100)
}


//Function that checks the passenger's age

function finalPriceCalc(){
    if (psgAge == "minorenne") {
        finalPrice = priceCalc (kmAmount, discountUnder);
        resultTicket.innerHTML = "Condizione scontata per minorenni"
    }   
    else if (psgAge == "over65"){
        finalPrice = priceCalc (kmAmount, discountOver);
        resultTicket.innerHTML = "Condizione scontata per over 65"
    }   
    else {
        finalPrice = kmAmount * kmPrice;
        resultTicket.innerHTML = "Condizione non scontata"
    }
}

// Method allowing to submit values for price calculation

calcButton.addEventListener("click", function (){
    // Coach function
    let carrozza = generateCoachNumber();
    resultCarrozza.innerHTML = carrozza;

    // CP function
    let codiceCP = generateCPNumber();
    resultNumber.innerHTML = codiceCP;

    //Price function
    getValues()
    finalPriceCalc()
    resultPrice.innerHTML = finalPrice.toFixed(2) + "€"
})

//Method allowing to reset all the values

resetButton.addEventListener("click", function (){
    kmAmountElement.value = 0
    psgAgeElement.value = 0
    resultPrice.innerHTML = ""
    resultName.innerHTML = ""
    document.getElementById("name").value = ""
    resultCarrozza.innerHTML = ""
    resultNumber.innerHTML = ""
    resultTicket.innerHTML = ""
    
    //Function that checks if all the camps have been compiled correctly, otherwise shows the error
    if (!requirements.classList.contains("d-none")){

        requirements.classList.toggle ("d-none")
    }
})



