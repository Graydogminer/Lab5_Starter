// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  const selectHorn = document.getElementById('horn-select');

  selectHorn.addEventListener('change', (event) => {

    const image = document.querySelector("img");

    image.src = `assets/images/${event.target.value}.svg`;

  });

  selectHorn.addEventListener('change', (event) => {

    const audio = document.querySelector("audio");

    audio.src = `assets/audio/${event.target.value}.mp3`;

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

}