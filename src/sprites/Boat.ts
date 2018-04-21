import * as PIXI from 'pixi.js';
import assets from '../assets';

export default class Boat extends PIXI.Sprite {
  constructor() {
    super(assets.images.boat.texture());
  }
}