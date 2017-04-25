function revealReasons(reason) {
  if (reason < 13) {
    setTimeout(function () {
      document.querySelectorAll('.reason').item(reason).classList.remove('not-played');
      console.log('A reason was revealed');
      reason += 1;
      revealReasons(reason);
    }, 1000);
  }
}

var play = function _play() {
  revealReasons(0);
  document.querySelector('button').removeEventListener('click', play);
};

document.querySelector('button').addEventListener('click', play);

console.log('Entry 1');
console.warn('Entry 2');
console.error('Entry 3');
error;
