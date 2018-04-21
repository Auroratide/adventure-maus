import * as PIXI from 'pixi.js';
import assets from '../../assets';

export default class Button extends PIXI.Sprite {
  constructor() {
    super(assets.images.button.texture());
    this.interactive = true;
  }
}