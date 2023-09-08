import { PIXI, app, Graphics } from './renderer';
import { config } from './config';


document.body.appendChild(app.view);
app.renderer.background.color = config.backgroundColor;

// Init.
const rect = new Graphics();
rect
  .beginFill(0x00AA00)
  .lineStyle(3, 0xFF0000)
  .drawRect(0, 0, 64, 64)
  .endFill();

app.stage.addChild(rect);

// Game Loop.
