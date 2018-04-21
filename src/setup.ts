import * as PIXI from 'pixi.js';
import app from './app';
import assets from './assets';

import Boat from './sprites/Boat';
import Water from './sprites/Water';
import BoatNavigationButton from './sprites/buttons/BoatNavigationButton';

const gameLoop = (boat:Boat) => (delta:Number) => {
  // boat.x += 1;
};

export default () => {
  const shadowBoat = new PIXI.Sprite();
  const boat = new Boat(shadowBoat);
  const foreWater = new Water();
  const backWater = new Water();
  const button = new BoatNavigationButton(boat);

  foreWater.position.set(0, 300);
  backWater.position.set(100, 250);
  backWater.scale.set(0.8, 0.8);
  boat.position.set(0, 150);
  button.position.set(700, 25);

  app.stage.addChild(shadowBoat);
  app.stage.addChild(backWater);
  app.stage.addChild(boat);
  app.stage.addChild(foreWater);
  app.stage.addChild(button);

  app.ticker.add(gameLoop(boat));
};