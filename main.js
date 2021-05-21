const btn = document.querySelector("#btn");

btn.addEventListener("click", textToSpeech);

// text to speech functionality
function textToSpeech() {
    const inputVal = document.querySelector("#text-to-speech").value;
    let speech = new SpeechSynthesisUtterance();
    
    speech.lang = "en-US";
    speech.text = inputVal;
    speech.volume = 1; 
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
};