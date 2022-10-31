// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  textArea = document.querySelector("textarea");

  populateVoiceList();

  document.querySelector("button").onclick = function() {

    const speakThis = new SpeechSynthesisUtterance(textArea.value);
    speechSynthesis.speak(speakThis);

  };

  const image = document.querySelector("img");

  if (speechSynthesis.speaking == true) {

    image.src = "assets/images/smiling-open.png";

  } 

  if (speechSynthesis.speaking == false) {

    image.src = "assets/images/smiling.png";

  }

}

function populateVoiceList() {
  
  if (typeof speechSynthesis === 'undefined') {

    return;

  }

  const voices = speechSynthesis.getVoices();

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