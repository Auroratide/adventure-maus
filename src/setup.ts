import * as PIXI from 'pixi.js';
import app from './app';
import assets from './assets';

import Boat from './sprites/Boat';
import Water from './sprites/Water';

const gameLoop = (boat:Boat) => (delta:Number) => {
  boat.x += 1;
};

export default () => {
  const boat = new Boat();
  const foreWater = new Water();
  const backWater = new Water();

  foreWater.position.set(0, 300);
  backWater.position.set(100, 250);
  backWater.scale.set(0.8, 0.8);
  boat.position.set(0, 150);

  app.stage.addChild(backWater);
  app.stage.addChild(boat);
  app.stage.addChild(foreWater);

  app.ticker.add(gameLoop(boat));
};