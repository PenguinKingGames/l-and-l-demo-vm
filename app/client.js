require('./app.less');
require('file?name=robots.txt!./static/robots.txt');

import { attach as fastclick } from 'fastclick';

import clientRender from './client-render';

// Enable styling of app when JS is enabled
document.documentElement.classList.add('has-js');

fastclick(document.body);

clientRender();
