import '../core/main';

const numberOfTap = 3;
let counterTap = 1;

document.body.addEventListener('touchend', () => {
  if (counterTap < numberOfTap) {
    counterTap += 1;
    setTimeout(() => {
      counterTap = 1;
    }, 1500);

    return false;
  }

  window.location.hash = 'mobile-debug';

  return true;
});
