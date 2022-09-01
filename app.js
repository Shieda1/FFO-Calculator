// https://www.omnicalculator.com/finance/ffo

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const v5 = document.getElementById('v5');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const fundsfromoperationRadio = document.getElementById('fundsfromoperationRadio');
const netincomeRadio = document.getElementById('netincomeRadio');
const depreciationandamortizationRadio = document.getElementById('depreciationandamortizationRadio');
const gainsfrompropertysalesRadio = document.getElementById('gainsfrompropertysalesRadio');
const lossesfrompropertysalesRadio = document.getElementById('lossesfrompropertysalesRadio');
const interestincomeRadio = document.getElementById('interestincomeRadio');

let fundsfromoperation;
let netincome = v1;
let depreciationandamortization = v2;
let gainsfrompropertysales = v3;
let lossesfrompropertysales = v4;
let interestincome = v5;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');
const variable5 = document.getElementById('variable5');

fundsfromoperationRadio.addEventListener('click', function() {
  variable1.textContent = 'Net income';
  variable2.textContent = 'Depreciation and amortization';
  variable3.textContent = 'Gains from property sales';
  variable4.textContent = 'Losses from property sales';
  variable5.textContent = 'Interest income';
  netincome = v1;
  depreciationandamortization = v2;
  gainsfrompropertysales = v3;
  lossesfrompropertysales = v4;
  interestincome = v5;
  result.textContent = '';
});

netincomeRadio.addEventListener('click', function() {
  variable1.textContent = 'Funds from operation';
  variable2.textContent = 'Depreciation and amortization';
  variable3.textContent = 'Gains from property sales';
  variable4.textContent = 'Losses from property sales';
  variable5.textContent = 'Interest income';
  fundsfromoperation = v1;
  depreciationandamortization = v2;
  gainsfrompropertysales = v3;
  lossesfrompropertysales = v4;
  interestincome = v5;
  result.textContent = '';
});

depreciationandamortizationRadio.addEventListener('click', function() {
  variable1.textContent = 'Funds from operation';
  variable2.textContent = 'Net income';
  variable3.textContent = 'Gains from property sales';
  variable4.textContent = 'Losses from property sales';
  variable5.textContent = 'Interest income';
  fundsfromoperation = v1;
  netincome = v2;
  gainsfrompropertysales = v3;
  lossesfrompropertysales = v4;
  interestincome = v5;
  result.textContent = '';
});

gainsfrompropertysalesRadio.addEventListener('click', function() {
  variable1.textContent = 'Funds from operation';
  variable2.textContent = 'Net income';
  variable3.textContent = 'Depreciation and amortization';
  variable4.textContent = 'Losses from property sales';
  variable5.textContent = 'Interest income';
  fundsfromoperation = v1;
  netincome = v2;
  depreciationandamortization = v3;
  lossesfrompropertysales = v4;
  interestincome = v5;
  result.textContent = '';
});

lossesfrompropertysalesRadio.addEventListener('click', function() {
  variable1.textContent = 'Funds from operation';
  variable2.textContent = 'Net income';
  variable3.textContent = 'Depreciation and amortization';
  variable4.textContent = 'Gains from property sales';
  variable5.textContent = 'Interest income';
  fundsfromoperation = v1;
  netincome = v2;
  depreciationandamortization = v3;
  gainsfrompropertysales = v4;
  interestincome = v5;
  result.textContent = '';
});

interestincomeRadio.addEventListener('click', function() {
  variable1.textContent = 'Funds from operation';
  variable2.textContent = 'Net income';
  variable3.textContent = 'Depreciation and amortization';
  variable4.textContent = 'Gains from property sales';
  variable5.textContent = 'Losses from property sales';
  fundsfromoperation = v1;
  netincome = v2;
  depreciationandamortization = v3;
  gainsfrompropertysales = v4;
  lossesfrompropertysales = v5;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(fundsfromoperationRadio.checked)
    result.textContent = `Funds from operation = ${computefundsfromoperation().toFixed(2)}`;

  else if(netincomeRadio.checked)
    result.textContent = `Net income = ${computenetincome().toFixed(2)}`;

  else if(depreciationandamortizationRadio.checked)
    result.textContent = `Depreciation and amortization = ${computedepreciationandamortization().toFixed(2)}`;

  else if(gainsfrompropertysalesRadio.checked)
    result.textContent = `Gains from property sales = ${computegainsfrompropertysales().toFixed(2)}`;

  else if(lossesfrompropertysalesRadio.checked)
    result.textContent = `Losses from property sales = ${computelossesfrompropertysales().toFixed(2)}`;

  else if(interestincomeRadio.checked)
    result.textContent = `Interest income = ${computeinterestincome().toFixed(2)}`;
})

// calculation

// FFO = net income + depreciationandamortization + losses - gains - interest income

function computefundsfromoperation() {
  return Number(netincome.value) + Number(depreciationandamortization.value) + Number(lossesfrompropertysales.value) - Number(gainsfrompropertysales.value) - Number(interestincome.value);
}

function computenetincome() {
  return Number(fundsfromoperation.value) - Number(depreciationandamortization.value) - Number(lossesfrompropertysales.value) + Number(gainsfrompropertysales.value) + Number(interestincome.value);
}

function computedepreciationandamortization() {
  return Number(fundsfromoperation.value) - Number(netincome.value) - Number(lossesfrompropertysales.value) + Number(gainsfrompropertysales.value) + Number(interestincome.value);
}

function computegainsfrompropertysales() {
  return Number(netincome.value) + Number(depreciationandamortization.value) + Number(lossesfrompropertysales.value) - Number(fundsfromoperation.value) - Number(interestincome.value);
}

function computelossesfrompropertysales() {
  return Number(fundsfromoperation.value) - Number(netincome.value) - Number(depreciationandamortization.value) + Number(gainsfrompropertysales.value) + Number(interestincome.value);
}

function computeinterestincome() {
  return Number(netincome.value) + Number(depreciationandamortization.value) + Number(lossesfrompropertysales.value) - Number(gainsfrompropertysales.value) - Number(fundsfromoperation.value);
}