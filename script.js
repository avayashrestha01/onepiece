const selector = document.getElementById('theme-selector');

selector.addEventListener('change', (event) => {
  document.documentElement.setAttribute('data-theme', event.target.value);
});
