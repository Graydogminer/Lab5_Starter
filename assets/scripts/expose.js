// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  const jsConfetti = new JSConfetti();

  const selectHorn = document.getElementById('horn-select');

  selectHorn.addEventListener('change', (event) => {

    const image = document.querySelector("img");

    image.src = `assets/images/${event.target.value}.svg`;

  });

  selectHorn.addEventListener('change', (event) => {

    const audio = document.querySelector("audio");

    audio.src = `assets/audio/${event.target.value}.mp3`;

  });

  selectHorn.addEventListener('change', (event) => {

    const audio = document.querySelector("audio");

    if (event.target.value === "party-horn") {

      const button = document.querySelector('button');
      
      button.addEventListener('click', (event) => {

        audio.play();

        if (audio.src === "assets/audio/party-horn.mp3") {

          jsConfetti.addConfetti();

        } 

      });

    }

  });

  const volumeControls = document.getElementById('volume-controls');

  volumeControls.addEventListener('change', (event) => {

    const icon = document.querySelector("img[alt='Volume level 2']");
  
    if (event.target.value == 0) {

      icon.src = "assets/icons/volume-level-0.svg";

    }

    if (event.target.value < 33) {

        if (event.target.value > 0) {

          icon.src = "assets/icons/volume-level-1.svg";

        }

    }

    if (event.target.value < 67) {

      if (event.target.value > 32) {

        icon.src = "assets/icons/volume-level-2.svg";

      }

    }

    if (event.target.value > 66) {

      icon.src = "assets/icons/volume-level-3.svg";

    }

  });
/*
  const button = document.querySelector('button');

  button.addEventListener('click', (event) => {

    selectHorn.addEventListener('click', (event) => {

      if (event.target.value === "party-horn") {

        var audioFile = new Audio('assets/audio/party-horn.mp3');
        audioFile.play();

        jsConfetti.addConfetti();


      }

      if (event.target.value === "car-horn") {

        var audioFile = new Audio('assets/audio/car-horn.mp3');
        audioFile.play();

      }

      if (event.target.value === "air-horn") {

        var audioFile = new Audio('assets/audio/air-horn.mp3');
        audioFile.play();

      }

    });

  });
*/
}