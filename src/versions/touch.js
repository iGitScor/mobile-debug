import '../lib/core';

const numberOfTap = 2;
let counterTap = 1;

document.body.addEventListener('touchstart', (event) => {
  if (event.touches.length > 1) {
    if (counterTap < numberOfTap) {
      counterTap += 1;
      setTimeout(() => {
        counterTap = 1;
      }, 1000);
    } else {
      window.location.hash = 'mobile-debug';
    }
  }
});
