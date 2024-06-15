import 'ignore-styles';
import './server.js';

import register from '@babel/register';

register({
    ignore: [/(node_module)/],
    presets: ['@babel/preset-env', '@babel/preset-react']
});

import './server';