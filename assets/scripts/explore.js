// explore.js

window.addEventListener('DOMContentLoaded', init);

const synth = window.speechSynthesis;

const voiceSelect = document.querySelector('select');

const image = document.querySelector("img");

let voices = [];

function populateVoiceList() {

  voices = synth.getVoices();
  
  for (let i = 0; i < voices.length ; i++) {

    const option = document.createElement('option');

    option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
    option.setAttribute('data-lang', voices[i].lang);

    option.setAttribute('data-name', voices[i].name);

    voiceSelect.appendChild(option);

  }

}

function init() {

  populateVoiceList();

  if (speechSynthesis.onvoiceschanged !== undefined) {

    speechSynthesis.onvoiceschanged = populateVoiceList;

  }

  var text = document.getElementById("text-to-speak").value

  const speakThis = new SpeechSynthesisUtterance(text);

  const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');

  for (let i = 0; i < voices.length ; i++) {

    if (voices[i].name === selectedOption) {

      speakThis.voice = voices[i];

    }

  }

  document.querySelector("button").onclick = function() {

    synth.speak(speakThis);

  }

  if (synth.speaking == false) {

    image.src = "assets/images/smiling.png";

  }

  if (synth.speaking == true) {

    image.src = "assets/images/smiling-open.png";

  } 

}