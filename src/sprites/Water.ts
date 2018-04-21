import * as PIXI from 'pixi.js';
import assets from '../assets';

export default class Water extends PIXI.Sprite {
  constructor() {
    super(assets.images.water.texture());
  }
}