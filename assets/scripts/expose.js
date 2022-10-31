// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  const jsConfetti = new JSConfetti();

  var name;

  const selectHorn = document.getElementById('horn-select');

  selectHorn.addEventListener('change', (event) => {

    const image = document.querySelector("img");

    image.src = `assets/images/${event.target.value}.svg`;

  });

  selectHorn.addEventListener('change', (event) => {

    name = event.target.value;

  });

  selectHorn.addEventListener('change', (event) => {

    const audio = document.querySelector("audio");

    audio.src = `assets/audio/${event.target.value}.mp3`;

  });

  const audio = document.querySelector("audio");

  const volumeControls = document.getElementById('volume-controls');

  volumeControls.addEventListener('change', (event) => {

    const icon = document.querySelector("img[alt='Volume level 2']");
    const volume = document.getElementById("volume");
  
    if (event.target.value == 0) {

      icon.src = "assets/icons/volume-level-0.svg";
      audio.volume = 0;


    }

    if (event.target.value < 33) {

        if (event.target.value > 0) {

          icon.src = "assets/icons/volume-level-1.svg";
          audio.volume = (event.target.value)/100;

        }

    }

    if (event.target.value < 67) {

      if (event.target.value > 32) {

        icon.src = "assets/icons/volume-level-2.svg";
        volume.value = (event.target.value)/100;

      }

    }

    if (event.target.value > 66) {

      if (event.target.value < 99) {

        icon.src = "assets/icons/volume-level-3.svg";
        volume.value = (event.target.value)/100;

      }

    }

    if (event.target.value > 98) {

      icon.src = "assets/icons/volume-level-3.svg";
      volume.value = 0.99;

    }

  });

  document.querySelector("button").onclick = function() {

    if (name == "party-horn") {

      jsConfetti.addConfetti();

    }
    audio.play();

  };

}