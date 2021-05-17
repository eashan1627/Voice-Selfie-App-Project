 var SpeechRecognition = window.webkitSpeechRecognition;
 var Recognition = new SpeechRecognition();

 function start() {
     document.getElementById("textbox").innerHTML = "";
     Recognition.start();
 }

 Recognition.onresult = function (event) {
     console.log(event);
     var Content = event.results[0][0].transcript;
     document.getElementById("textbox").innerHTML = Content;
     console.log(Content);
     if (Content == "take my selfie") {
        console.log("Taking Selfie");
        speak();
        
     }
 }

 function speak() {
     var synth = window.speechSynthesis;
     var speak_data = "Taking your Selfie in 5 seconds.";
     var utter = new SpeechSynthesisUtterance(speak_data);
     synth.speak(utter);
     Webcam.attach(camera);
     setTimeout(function() {
     TakeSnapshot();
     Save();
     }, 5000);
 }

 var camera = document.getElementById("camera");

 Webcam.set ({
     width: 360,
     height: 250,
     image_format: png,
     png_quality: 100
 });

function TakeSnapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';

    });
    
}

function Save() {
    link= document.getElementById("link");
    img=  document.getElementById("selfie_image").src;
    link.href= img;
    link.click();
}