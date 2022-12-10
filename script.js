new AirDatepicker('#datepicker', {
    position: 'bottom center'
});

const status25Price = 0.0344;
const status28Price = 0.043;
const status30Price = 0;
const status40Price = 0.07;
const entityPrice = 0.05;
// уточнить стоимость операций

function calc25(){
    let statusValue25 = document.getElementById('calcInput-textAarea25').value; 
    let result = status25Price * statusValue25;
    result = result.toFixed(2);
    document.getElementById('result25').innerHTML = result;
};

function calc28(){
    let statusValue28 = document.getElementById('calcInput-textAarea28').value; 
    let result = status28Price * statusValue28;
    result = result.toFixed(2);
    document.getElementById('result28').innerHTML = result;
};

function calc30(){
    let statusValue30 = document.getElementById('calcInput-textAarea30').value; 
    let result = status30Price * statusValue30;
    result = result.toFixed(2);
    document.getElementById('result30').innerHTML = result;
};

function calc40(){
    let statusValue40 = document.getElementById('calcInput-textAarea40').value; 
    let result = status40Price * statusValue40;
    result = result.toFixed(2);
    document.getElementById('result40').innerHTML = result;
};

function calcEntity(){
    let statusValueEntity = document.getElementById('calcInput-textAareaEntity').value; 
    let result = entityPrice * statusValueEntity;
    result = result.toFixed(2);
    document.getElementById('resultEntity').innerHTML = result;
};

function getResult(){
    let result25 = +document.getElementById('result25').textContent;
    let result28 = +document.getElementById('result28').textContent;
    let result30 = +document.getElementById('result30').textContent;
    let result40 = +document.getElementById('result40').textContent;
    let resultEntity = +document.getElementById('resultEntity').textContent;
    let sum = result25 + result28 + result30 + result40 + resultEntity;
    document.getElementById('calcResult').innerHTML = sum;
    console.log(sum);
};
