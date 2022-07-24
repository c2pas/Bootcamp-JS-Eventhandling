var timer = setInterval(function(){
    startTime()
}, 1000);

var counter = 11;

function startTime() {
  if(counter == 0){
    console.log(counter);
      document.getElementById("txt").innerHTML = "<img src='rocket.jpeg' />";
    clearInterval(timer);
  } else {
    counter--;
    document.getElementById('txt').innerHTML = counter;  
  }

}