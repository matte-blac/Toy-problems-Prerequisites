//import readline to enable input function
const readline = require('readline')

//create an instance of readline.interface and configure stdin and stdout
const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

//prompt the user for input
prompt.question("Enter your grade: ", (grade) => {
  //grade generator
  if (grade >= 80 && grade <= 100) {
    console.log("Your grade is A")
  }
  if (grade >= 60 && grade < 80) {
    console.log("Your grade is B")
  }
  if (grade >= 50 && grade < 60) {
    console.log("Your grade is C")
  }
  if (grade >= 40 && grade < 50) {
    console.log("Your grade is D")
  }
  if (grade >= 0 && grade < 40) {
    console.log("Your grade is E")
  }
  else {
    console.log("INVALID")
  }
  //close the readline.interface
  prompt.close()
})