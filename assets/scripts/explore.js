// explore.js

window.addEventListener('DOMContentLoaded', init);

const speechSynthesis = window.speechSynthesis;

const voices = speechSynthesis.getVoices();

function populateVoiceList() {
  
  if (typeof speechSynthesis === 'undefined') {

    return;

  }

  for (let i = 0; i < voices.length; i++) {

    const option = document.createElement('option');

    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {

      option.textContent += ' — DEFAULT';

    }

    option.setAttribute('data-lang', voices[i].lang);

    option.setAttribute('data-name', voices[i].name);

    document.getElementById("voice-select").appendChild(option);

  }

}

function init() {
  // TODO

  textArea = document.querySelector("textarea");

  populateVoiceList();

  const image = document.querySelector("img");

  const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');

  document.querySelector("button").onclick = function() {

    const speakThis = new SpeechSynthesisUtterance(textArea.value);

    for (let i = 0; i < voices.length ; i++) {

      if (voices[i].name === selectedOption) {
  
        speakThis.voice = voices[i];
        
      }
    }

    speechSynthesis.speak(speakThis);

    image.src = "assets/images/smiling-open.png";

  };

  if (speechSynthesis.speaking == false) {

    image.src = "assets/images/smiling.png";

  }

  if (speechSynthesis.speaking == true) {

    image.src = "assets/images/smiling-open.png";

  } 

}