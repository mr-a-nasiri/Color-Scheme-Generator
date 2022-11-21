'use strict';

document.querySelector('button').addEventListener('click', function () {
  const colorHex = document.querySelector('input[type=color]').value.slice(1);
  const colorScheme = document.querySelector('select').value;

  fetch(`https://www.thecolorapi.com/scheme?hex=${colorHex}&mode=${colorScheme}&count=6`)
    .then(res => res.json())
    .then(data =>
      data.colors.forEach(function (color, i) {
        document.querySelector(`.color-${i + 1}`).style.backgroundColor = `${color.hex.value}`;
        document.querySelector(`.color-code-${i + 1}`).textContent = `${color.hex.value}`;
      })
    );
});

document.querySelector('.colors-panel').addEventListener('click', function (e) {
  if (!e.target.classList.contains('code')) return;
  navigator.clipboard.writeText(e.target.textContent);
  document.querySelector('.copy').style.display = 'flex';
  setTimeout(() => {
    document.querySelector('.copy').style.display = 'none';
  }, 1000);
});
