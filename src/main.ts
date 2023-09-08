import { app } from './renderer';
import { config } from './config';

document.body.appendChild(app.view);
app.renderer.background.color = config.backgroundColor;

// Init.

// Game Loop.
