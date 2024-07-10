let salary = prompt("Enter salary");
let relief;

let nssf = salary * 0.06;
let taxableIncome = salary - nssf;

let tax = paye(taxableIncome);
function reliefCalculator(tax) {
  if (tax <= 2400) {
    relief = tax;
  } else {
    relief = 2400;
  }
  return relief;
}

let taxRelief = reliefCalculator(tax);

function paye(salary) {
  let tax = 0;
  if (salary <= 24000) {
    tax = salary * 0.1;
  } else if (salary >= 24001 && salary <= 32333) {
    tax = salary * 0.25;
  } else if (salary >= 32334 && salary <= 500000) {
    tax = salary * 0.3;
  } else if (salary >= 500001 && salary <= 800000) {
    tax = salary * 0.325;
  } else {
    tax = salary * 0.35;
  }
  return tax;
}

function insurance(salary) {
  if (salary > 0 && salary <= 5999) {
    nhif = 150;
  } else if (salary >= 6000 && salary <= 7999) {
    nhif = 300;
  } else if (salary >= 8000 && salary <= 11999) {
    nhif = 400;
  } else if (salary >= 12000 && salary <= 14999) {
    nhif = 500;
  } else if (salary >= 15000 && salary <= 19999) {
    nhif = 600;
  } else if (salary >= 20000 && salary <= 24999) {
    nhif = 750;
  } else if (salary >= 25000 && salary <= 29999) {
    nhif = 850;
  } else if (salary >= 30000 && salary <= 34999) {
    nhif = 900;
  } else if (salary >= 35000 && salary <= 39999) {
    nhif = 950;
  } else if (salary >= 40000 && salary <= 44999) {
    nhif = 1000;
  } else if (salary >= 45000 && salary <= 49999) {
    nhif = 1100;
  } else if (salary >= 50000 && salary <= 59999) {
    nhif = 1200;
  } else if (salary >= 60000 && salary <= 69999) {
    nhif = 1300;
  } else if (salary >= 70000 && salary <= 79999) {
    nhif = 1400;
  } else if (salary >= 80000 && salary <= 89999) {
    nhif = 1500;
  } else if (salary >= 90000 && salary <= 99999) {
    nhif = 1600;
  } else {
    nhif = 1700;
  }
  return nhif;
}

let netPay = salary - tax + taxRelief - nssf - insurance(salary);
let netSalary = alert(netPay);
