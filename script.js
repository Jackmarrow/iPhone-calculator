const valueReader = document.getElementById('valueReader');
const buttonHandler = document.querySelector('.button-container');
let number = 0;
let result = ""; 

//------------ Eventlistener -----------
buttonHandler.addEventListener('click', calculate)

//----------- Function -------------


function calculate(e){
    const operationClass = e.target.className.split(' ')[0];
    const selectedValue = e.target.innerText;
    if(!isNaN(selectedValue) || selectedValue === ','){
        number += selectedValue;
        valueReader.innerText = number;
    }
    if(operationClass === 'operation'){
        selectedOperation(e.target.id);
        console.log(e.target.id);
        console.log(result);
    }
}

function selectedOperation(operation){
    switch(operation){
        case 'minus':
            result= '-';
            break; 
        case 'divide':
            result += '/';
            break; 
        case 'times':
            result += '*';
            break; 
        case 'equal':
            valueReader.innerText = result;
            break; 
        default:
            'error';    
    }
}

