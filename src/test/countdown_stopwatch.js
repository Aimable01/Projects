//The stop Watch
  let hours = 0
  let minutes = 0
  let seconds = 0
  let milliseconds = 0
  let timer

  function start(){
    timer = setInterval(updateStopWatch,10)
  }

  function stop(){
    clearInterval(timer)
  }

  function reset(){
    clearInterval(timer)
    hours = 0
    minutes = 0
    seconds = 0
    milliseconds = 0
    displayTime()
  }

  function updateStopWatch(){
    milliseconds += 10

    if(milliseconds == 1000){
        milliseconds = 0
        if(seconds == 59){
            seconds = 0
            if(minutes == 59){
                minutes = 0
                hours++
            }else{
                minutes++
            }
        }else{
            seconds++
        }
    }
    displayTime()
  }

  function displayTime(){
    const displayElement = document.getElementById('display')
    displayElement.innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${milliPad(milliseconds)}`
  }

  function pad(value){
    return value < 10 ? '0' + value : value
  }

  function milliPad(value){
    return value < 10 ? '00' + value : (value < 100 ? '0' + value : value)
  }



//The count down timer
 function startCountDown(){
    const inputNumber = document.getElementById('input')
    const countDownDisplay = document.getElementById('count-down-display')

    let minutes = parseInt(inputNumber.value,10)
    let seconds = minutes*60

    if(isNaN(minutes) || minutes <= 0){
        const errorDisplay = document.getElementById('error-message')
        errorDisplay.innerText = 'The value given is not a number.'
        return;
    }

    const countDownTimer = setInterval(()=>{
        let remainingMinutes = Math.floor(seconds / 60)
        let remainingSeconds = seconds % 60

        countDownDisplay.innerText = `${remainingMinutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`

        if(seconds <= 0){
            const finishedMessage = document.getElementById('finished-message')
            finishedMessage.innerText = 'The timer has finished successfully! Please enter a new value.'
            clearInterval(countDownTimer)
        }else{
            seconds--
        }
    },1000)
    inputNumber.value = ''
 }

 const inputField = document.getElementById('input')
 inputField.addEventListener('keydown', (event)=>{
    if(event.key === 'Enter'){
        startCountDown()
    }
 })









// //-----------------the email form validation-----------------------
//   let email = 'aimable@gmail.com'
//  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//  if(!emailRegex.test(email)) console.log('Error')
//  else console.log('Successfull')