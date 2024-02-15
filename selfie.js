var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
} 

recognition.onresult = function(event){
console.log(event);

var Content = event.results[0][0].transcript;
console.log(Content);

document.getElementById("textbox").innerHTML = Content;
if(Content == "take my selfie")
{
    console.log("taking selfie---");
    speak();
}

}



function speak(){
    var synth = window.speechSynthesis;
    speak_data = "taking your selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
{
      img_id = "selfie";
      take_snapshot();
      speak_data = "Taking your next Selfie in 5 seconds";
      var utterThis = new SpeechSynthesisUtterance(speak_data);
      synth.speak(utterThis);
}, 5000);

setTimeout(function()
{
      img_id = "selfie1";
      take_snapshot();
      speak_data = "Taking your next Selfie in 5 seconds";
      var utterThis = new SpeechSynthesisUtterance(speak_data);
      synth.speak(utterThis);
}, 10000);
setTimeout(function()
{
      img_id = "selfie2";
      take_snapshot();
      save();
      speak_data = "Taking your next Selfie in 5 seconds";
      var utterThis = new SpeechSynthesisUtterance(speak_data);
      synth.speak(utterThis);
}, 15000);
}

function save()
{
    link = document.getElementById("link");
    link1 = document.getElementById("link1");
    link2 = document.getElementById("link2");
    image = document.getElementById("selfie_image").src;
    image1 = document.getElementById("selfie_image1").src;
    image2 = document.getElementById("selfie_image2").src;
    link.href = image;
    link1.href = image1;
    link2.href = image2;
    link.click();
    link1.click();
    link2.click();
}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});

camera =  document.getElementById("camera");

function take_snapshot()
{
console.log(img_id);
Webcam.snap(function(data_uri) {
if(img_id=="selfie"){
document.getElementById("result1").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
}
if(img_id=="selfie1"){
document.getElementById("result2").innerHTML='<img id="selfie_image1" src="'+data_uri+'"/>';
}
if(img_id=="selfie2"){
document.getElementById("result3").innerHTML = '<img id="selfie_image2" src="'+data_uri+'"/>';
}
});
}