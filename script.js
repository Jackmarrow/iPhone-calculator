const valueReader = document.getElementById('valueReader');
const operatorButtons = document.querySelectorAll('#operation');
const numberButtons = document.querySelectorAll('#number');
const equalButton = document.querySelector('#equal');
const extraOperation = document.querySelectorAll('#extraOperation');

let num1 = "";
let num2 = "";
let operation;

//------------ Eventlistener -----------

equalButton.addEventListener('click',() => {
    const output = displayResult(operation,num1,num2);
    valueReader.innerHTML = output;
    num1 = "";
    num2 = "";
    operation = undefined;
});

operatorButtons.forEach((ele) => {
    ele.addEventListener('click',(e) => {
       operation = e.target.innerHTML;
    })
})

numberButtons.forEach((ele) => {
    ele.addEventListener('click',(e) => {
        e.stopPropagation();
        if(operation){
            num2 += e.target.innerHTML;
            valueReader.innerHTML = num2;
        }
        else{
            num1 += e.target.innerHTML;
            valueReader.innerHTML = num1;
        }
    })
})

//----------- Function -------------

function displayResult(operation,num1,num2){
    let result;
    switch(operation){
        case '+':
            result = (+num1) + (+num2)
            break
        case '÷':
            result = num1 / num2
            break
        case '×':
            result = num1 * num2
            break
        case '-':
            result = num1 - num2
            break
        default:
            'Error'    
    }
    return result;
}


