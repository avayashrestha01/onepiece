const selector = document.getElementById('theme-selector');

selector.addEventListener('change', (event) => {
  document.documentElement.setAttribute('data-theme', event.target.value);
});

const rotatePics = document.getElementById('rotate');
const bnsText = document.getElementById('bnsText');
const music = document.getElementById('bns');

function musicBNS(){
  if (music.paused){
    music.play();
    bnsText.textContent = 'Playing ⏸';
    if (!rotatePics.classList.contains('rotate')){
      rotatePics.classList.add('rotate');
    }
    else{
      rotatePics.style.animationPlayState = 'running';
    }
  }

  else{
    music.pause();
    bnsText.textContent = 'Paused ▶';
    rotatePics.style.animationPlayState = 'paused';
  }
}

