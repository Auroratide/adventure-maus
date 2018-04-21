import * as PIXI from 'pixi.js';
import app from './app';
import assets from './assets';

export default () => {
  let sprite = new PIXI.Sprite(assets.images.boat.texture());
  app.stage.addChild(sprite);
};