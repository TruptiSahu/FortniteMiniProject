const body = document.querySelector('body');
const audio = document.querySelector('.audio');

body.addEventListener('click', (e) => {
  const buttet = document.createElement('span');
  buttet.className = 'bullet';
  let x = e.offsetX;
  let y = e.offsetY;
  buttet.style.left = x + 'px';
  buttet.style.top = y + 'px';
  body.appendChild(buttet);

  setTimeout(function () {
    audio.play();

    setTimeout(function () {
      audio.pause();
      audio.currentTime = 0;
    }, 1000);
  }, 0);
});
