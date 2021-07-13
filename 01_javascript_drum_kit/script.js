function removeTransition(e) {
  // there can be more than one transition going on, 
  // we want only one, the transform transition
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  // this prevents the audio to wait until its done playing
  // so we can press key again and again
  audio.currentTime = 0;
  audio.play();
  // add a playing class, will be removed later when transition is completed
  key.classList.add('playing');
}

window.addEventListener('keydown', playSound);

const keys = document.querySelectorAll('.key');
// When the CSS transition ends, we want to remove 'playing' class from it
// otherwise the key's UI will be stuck at .playing state
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
