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
//function to define the NHIF bands and the corresponding deductions
function calculateNHIF(grossIncome) {
  const nhifBands = [6000, 8000, 12000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 60000, 70000, 80000, 90000, 100000];
  const nhifDeductions = [150, 300, 400, 500, 600, 750, 850, 900, 950, 1000, 1100, 1200, 1300, 1400, 1500, 1600];

  //loop through the NHIF bands to aquire the appropriate deductions
  for (let i = 0; i < nhifBands.length; i++) {
    if (grossIncome < nhifBands[i]) {
    //return the NHIF deductions to their corresponding bands
      return nhifDeductions[i];
    }
  }
  //default NHIF deduction if grossIncome is above the provided bands
  return 1700;
}
//prompt for input of basic salary and benefits
prompt.question("Enter your basic salary: ", (basicSalary) => {
  prompt.question("Enter your benefits: ", (benefits) => {
    
    //calculations of variables
    const grossPay = Number(basicSalary) + Number(benefits);
    const deductionNHIF = calculateNHIF(grossPay);
    const deductionNSSF = grossPay * 0.06;
    const taxablePay = grossPay - deductionNHIF - deductionNSSF;
    const payee = Math.floor(calculatePayee(taxablePay));
    const netPay = grossPay - deductionNHIF - deductionNSSF - payee;

    //display calculations
    console.log(`Payee: ${payee}`);
    console.log(`NHIF Deduction: ${deductionNHIF}`);
    console.log(`NSSF Deduction: ${deductionNSSF}`);
    console.log(`Gross Salary: ${grossPay}`);
    console.log(`Net Salary: ${netPay}`);

    prompt.close();
  });
});
