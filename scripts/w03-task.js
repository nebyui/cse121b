/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1, number2) {
    return number1 + number2
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2).toFixed(2);
};


document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

var subtract = function (number1, number2) {
    return number1 - number2
};

var subtractNumbers = function () {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2).toFixed(2);
};

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2).toFixed(2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

const divide = (x, y) => x / y

const divideNumbers = () => {
    let dividend = parseFloat(document.getElementById("dividend").value);
    let divisor = parseFloat(document.getElementById("divisor").value);
    let quotient = divide(dividend, divisor);
    document.getElementById("quotient").value = quotient.toFixed(2);
};

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */

function getTotal() {
    let subtotal = parseFloat(document.getElementById("subtotal").value);

    if (document.getElementById("member").checked) {
        subtotal = subtotal - (subtotal * 0.2)
    }


    document.getElementById("total").textContent = `$${subtotal.toFixed(2)}`
}

document.getElementById("getTotal").addEventListener("click", getTotal)

/* ARRAY METHODS - Functional Programming */

/* Output Source Array */

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.getElementById("array").textContent = numbersArray;

/* Output Odds Only Array */

// const oddNumbers = numbersArray.filter(n => n % 2 == 1);   <-- alternate way to do it
// document.getElementById("odds").textContent = oddNumbers;

document.querySelector('#odds').innerHTML = numbersArray.filter(n => n % 2 == 1);

/* Output Evens Only Array */

// const evenNumbers = numbersArray.filter(n => n % 2 == 0);
// document.getElementById("evens").textContent = evenNumbers;

document.querySelector('#evens').innerHTML = numbersArray.filter(n => n % 2 == 0);

/* Output Sum of Org. Array */

// const sumNumbers = numbersArray.filter(n => n % 2 == 0);
// document.getElementById("evens").textContent = evenNumbers;

document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, n) => sum + n);

/* Output Multiplied by 2 Array */

document.querySelector('#multiplied').innerHTML = numbersArray.map(n => n * 2);

/* Output Sum of Multiplied by 2 Array */

const multipliedArray = numbersArray.map(n => n * 2);
document.querySelector('#sumOfMultiplied').innerHTML = multipliedArray.reduce((sum, n) => sum + n);