// eslint-disable-next-line
'use strict';

// Initialize watcher
import './watcher/consoleWriter';

// Initialize log catcher
import './handler/logHandler';

// Initialize error catcher
import './handler/errorHandler';

// Load style
import '../display/mobile-debug.css';

// Initialize console
const node = document.createElement('div');
node.id = 'mobile-debug';
node.innerHTML = '<p><a href="#">&times; Close</a></p><p class="title">Debug console</p>';
document.body.appendChild(node);
