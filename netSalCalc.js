const readline = require('readline');

const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculatePayee(grossIncome) {
  let payee = 0;

  if (grossIncome <= 24000 && grossIncome > 0) {
    payee = grossIncome * 0.1;
  } else if (grossIncome > 24000 && grossIncome <= 32333) {
    payee = (grossIncome - 24000) * 0.25;
  } else if (grossIncome > 32333 && grossIncome <= 500000) {
    payee = (grossIncome - 32333) * 0.3;
  } else if (grossIncome > 500000 && grossIncome <= 800000) {
    payee = (grossIncome - 500000) * 0.325;
  } else if (grossIncome > 800000) {
    payee = (grossIncome - 800000) * 0.35;
  }
  return payee;
}
//function to calculate the NHIF deductions
function calculateNHIF(grossIncome) {
  let NHIF = 0;

  if (grossIncome < 6000 && grossIncome > 0) {
    NHIF = 150;
  } else if (grossIncome >= 6000 && grossIncome < 8000) {
    NHIF = 300;
  } else if (grossIncome >= 8000 && grossIncome < 12000) {
    NHIF = 400;
  } else if (grossIncome >= 12000 && grossIncome < 15000) {
    NHIF = 500;
  } else if (grossIncome >= 15000 && grossIncome < 20000) {
    NHIF = 600;
  } else if (grossIncome >= 20000 && grossIncome < 25000) {
    NHIF = 750;
  } else if (grossIncome >= 25000 && grossIncome < 30000) {
    NHIF = 850;
  } else if (grossIncome >= 30000 && grossIncome < 35000) {
    NHIF = 900;
  } else if (grossIncome >= 35000 && grossIncome < 40000) {
    NHIF = 950;
  } else if (grossIncome >= 40000 && grossIncome < 45000) {
    NHIF = 1000;
  } else if (grossIncome >= 45000 && grossIncome < 50000) {
    NHIF = 1100;
  } else if (grossIncome >= 50000 && grossIncome < 60000) {
    NHIF = 1200;
  } else if (grossIncome >= 60000 && grossIncome < 70000) {
    NHIF = 1300;
  } else if (grossIncome >= 70000 && grossIncome < 80000) {
    NHIF = 1400;
  } else if (grossIncome >= 80000 && grossIncome < 90000) {
    NHIF = 1500;
  } else if (grossIncome >= 90000 && grossIncome < 100000) {
    NHIF = 1600;
  } else if (grossIncome >= 100000) {
    NHIF = 1700;
  }
  //returning the NHIF deduction to the appropriate conditional statement
  return NHIF;
}

prompt.question("Enter your basic salary: ", (basicSalary) => {
  prompt.question("Enter your benefits: ", (benefits) => {
    
    const grossPay = Number(basicSalary) + Number(benefits);
    const deductionNHIF = calculateNHIF(grossPay);
    const deductionNSSF = grossPay * 0.06;
    const taxablePay = grossPay - deductionNHIF - deductionNSSF;
    const payee = Math.floor(calculatePayee(taxablePay));
    const netPay = grossPay - deductionNHIF - deductionNSSF - payee;

    console.log(`Payee: ${payee}`);
    console.log(`NHIF Deduction: ${deductionNHIF}`);
    console.log(`NSSF Deduction: ${deductionNSSF}`);
    console.log(`Gross Salary: ${grossPay}`);
    console.log(`Net Salary: ${netPay}`);

    prompt.close();
  });
});
