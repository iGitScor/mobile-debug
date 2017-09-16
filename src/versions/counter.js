import '../lib/core';

const button = document.createElement('a');
button.href = '#mobile-debug';
button.id = 'mobile-debug-counter';
button.innerHTML = '<span class="error">X</span><span class="warn">X</span><span>X</span>';
document.body.appendChild(button);
