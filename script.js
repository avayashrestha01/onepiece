const selector = document.getElementById('theme-selector');

selector.addEventListener('change', (event) => {
  document.documentElement.setAttribute('data-theme', event.target.value);
});

const rotatePics = document.getElementById('rotate');

function rotateAnimation(){
  if (rotatePics.classList.contains('rotate')){
    rotatePics.classList.remove('rotate');
  }

  else{
    rotatePics.classList.add('rotate');
  }
}

