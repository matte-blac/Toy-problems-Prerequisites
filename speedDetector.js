//import readline to enable input function
const readline = require('readline')

//initialize speed and speed limit 
const calculateDemeritPoints = (speed) =>{
  const speedLimit = 70 

  if (speed < speedLimit){
    return "Ok"
  }

//calaculate demerit points
const demeritPoints = Math.floor((speed - speedLimit) / 5)
  if (demeritPoints > 12){
    return "License suspended"
  }

  return `Driver has ${demeritPoints} demerit points`
}

//create an instance of readline.interface
const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

//prompt the user for input
prompt.question("Enter the speed of car: ", (answer) =>{
  const speed = (answer)

  if (speed){
    const result = calculateDemeritPoints(speed)
    console.log(result)
  }else{
    console.log('INVALID')
  }
prompt.close()
})