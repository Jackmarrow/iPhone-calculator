const valueReader = document.getElementById('valueReader');
const operatorButtons = document.querySelectorAll('#operation');
const numberButtons = document.querySelectorAll('#number');
const equalButton = document.querySelector('#equal');
const extraOperation = document.querySelectorAll('#extraOperation');

let num1 = "";
let num2 = "";
let operation;

//------------ Eventlistener -----------

extraOperation.forEach((ele) => {
    ele.addEventListener('click',(e) => {
        if(e.target.innerHTML === 'AC'){
           valueReader.innerHTML = 0;
           clearAll();
        }
    })
})


equalButton.addEventListener('click', showResultOnScreen);

operatorButtons.forEach((ele) => {
    ele.addEventListener('click',checkNumValue);
})

numberButtons.forEach((ele) => {
    ele.addEventListener('click', assignValuesToNumber)
})



//----------- Function -------------

function clearAll(){
    num1 = "";
    num2 = "";
    operation = undefined;
}

function checkNumValue(e){
    if(num1){
        operation = e.target.innerHTML;
   }
}

function showResultOnScreen(){
    if(num1 && num2){
        const output = selectedOperation(operation,num1,num2);
        valueReader.innerHTML = output;
        clearAll();
    }
}

function assignValuesToNumber(e){
    e.stopPropagation();
    if(operation){
        num2 += e.target.innerHTML;
        valueReader.innerHTML = num2;
    }
    else{
        num1 += e.target.innerHTML;
        valueReader.innerHTML = num1;
    }
}

function selectedOperation(operation,num1,num2){
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


// const test = document.querySelector('.test');

// console.log(test.dataset);