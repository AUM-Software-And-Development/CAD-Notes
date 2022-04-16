// Define variables
var operation;
var value1;
var value2;

// Assign event handler
window.onload = onPageLoad;

// On page load event
function onPageLoad(){
    
    if (window.location.pathname.includes("SimpleCalculator.html")){
        
        var submitButton = document.getElementById("submit");

        submitButton.addEventListener("click", showResults);
    }
}

// Add two numbers together
function add(a, b) {
    var result;
    var anum;
    var bnum;

    result = checkIfNumbers(a, b);

    if (result == null) {
        anum = Number(a);
        bnum = Number(b);
        result = anum + bnum;
    }

    return result;
}

// Concatenate two values
function concat(a, b) {
    return a.toString() + b.toString();
}

// Check if two values are numbers
function checkIfNumbers(a, b) {
    var result = null;

    var aResult = isNaN(a);
    var bResult = isNaN(b);

    if (aResult == true && bResult == true) {
        result = 'Arguments "' + a + '" and "' + b + '" are not numbers.'
    }
    else if (aResult) {
        result = 'Argument "' + a + '" is not a number.'
    } else if (bResult) {
        result = 'Argument "' + b + '" is not a number.'
    }
    
    return result;
}

// Multiply two numbers
function multiply(a, b) {
    var result;
    var anum;
    var bnum;

    result = checkIfNumbers(a, b);

    if (result == null) {
        anum = Number(a);
        bnum = Number(b);
        result = anum * bnum;
    }

    return result;
}

// Divide pne number by another
function divide(a, b) {
    var result;
    var anum;
    var bnum;

    result = checkIfNumbers(a, b);

    if (result == null) {
        anum = Number(a);
        bnum = Number(b);
        result = anum / bnum
    }

    return result;
}

// Run the specified math operation
function runOperation() {

    var result;

    if (operation == "Add") {
        result = add(value1, value2);
    } else if (operation == "Concat") {
        result = concat(value1, value2);
    } else if (operation == "Multiply") {
        result = multiply(value1, value2);
    } else if (operation == "Divide") {
        result = divide(value1, value2);
    }
    
    return result;
}

// Show the results on the page
function showResults() {

    operation = document.getElementById("operation").value;
    value1 = document.getElementById("value1").value;
    value2 = document.getElementById("value2").value;
    var output = document.getElementById("output");
    var results = runOperation();
    output.innerHTML = results;
}