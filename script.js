const audio = document.getElementById('background-audio');
const button = document.getElementById('toggle-animations');
let isAnimating = true;
let animationSpeed = 1;

function toggleAnimations() {
  const body = document.body;
  body.classList.toggle('no-animations');

  if (body.classList.contains('no-animations')) {
    button.innerHTML = '<i class="fa fa-play"></i>';
    audio.pause();
    isAnimating = false;
  } else {
    button.innerHTML = '<i class="fa fa-pause"></i>';
    audio.play();
    isAnimating = true;
  }
}

function adjustAnimationSpeed(direction) {
  if (direction === 'up') {
    animationSpeed = Math.max(0.1, animationSpeed - 0.1);
  } else if (direction === 'down') {
    animationSpeed = Math.min(5, animationSpeed + 0.1);
  }

  document.querySelector('.sky').style.animationDuration = `${30 / animationSpeed}s`;
  document.querySelector('.land').style.animationDuration = `${10 / animationSpeed}s`;
  document.querySelector('.road').style.animationDuration = `${1 / animationSpeed}s`;
}

document.getElementById('toggle-animations').addEventListener('click', toggleAnimations);
document.getElementById('speed-up').addEventListener('click', () => adjustAnimationSpeed('down'));
document.getElementById('speed-down').addEventListener('click', () => adjustAnimationSpeed('up'));

document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    toggleAnimations();
    event.preventDefault();
  } else if (event.code === 'ArrowUp') {
    adjustAnimationSpeed('down');
  } else if (event.code === 'ArrowDown') {
    adjustAnimationSpeed('up');
  }
});
