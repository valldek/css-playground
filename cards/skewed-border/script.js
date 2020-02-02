(function() {
  window.addEventListener('load', () => {
    const themeToggle = document.getElementById('theme-switcher');

    (function initialThemeSetUp() {
      themeToggle.checked ?
      document.body.className = 'theme--light' :
      document.body.className = 'theme--dark'
    })();

    themeToggle.addEventListener('change', handleThemeToggle, false);
  }, false);

  const handleThemeToggle = (evt) => {
    console.log('toggle');
    evt.target.checked ?
      document.body.className = 'theme--light' :
      document.body.className = 'theme--dark'
  }
})();
