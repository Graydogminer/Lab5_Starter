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

  // const icon = document.

});

}