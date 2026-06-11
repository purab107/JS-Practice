// generate random color

const randomColor = function (){
  const hex = "0123456789ABCDEF"
  let color = '#'

  for(let i=0; i<6; i++){
    color += hex[Math.floor(Math.random() * 16)]
  }

  return color;
}

let intervalId;

function changeBgColor(){
  console.log('color changing', Date.now())
  document.body.style.backgroundColor = randomColor()
}

const startChangingColor = function () {
  if(!intervalId){
    intervalId = setInterval(changeBgColor, 1000)
  }
}

const stopChangingColor = function () {
  clearInterval(intervalId)
  document.body.style.backgroundColor = "black"
  intervalId = null;
}

document.getElementById('start').addEventListener('click', startChangingColor)

document.getElementById('stop').addEventListener('click', stopChangingColor)
