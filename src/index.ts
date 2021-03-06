import * as PIXI from 'pixi.js';
import app from './app';
import assets from './assets';
import setup from './setup';

app.renderer.backgroundColor = 0xeeeeee;

PIXI.loader
  .add(assets.images.boat.path)
  .add(assets.images.water.path)
  .add(assets.images.button.path)
  .load(setup);

document.body.appendChild(app.view);