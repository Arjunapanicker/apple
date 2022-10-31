x = 0;
y = 0;
apple = "";

to_number = 0;
speak_data ="";
draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();
function preload()
{
  apple = loadImage("apple.png");
}




function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 
  

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    to_number = Number(content);
    if(Number.isInteger(to_number))
    {
      document.getElementById("status").innerHTML = "Strated Drawing Apple";
      draw_apple = 'set';
    }
    else{
      document.getElementById("status").innerHTML = "The Speech has not recognised o number";
    }

}

function setup() {
  
 canvas = createCanvas(900,600);
 canvas.position(100,100);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    for(var i=1; i <= to_number; i++){
      x = Math.floor(Math.random()*700);
      y = Math.floor(Math.random()*400);
      image(apple ,x,y,50,50);
    }
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
function preload()
{
 img = loadImage("apple.png");
}