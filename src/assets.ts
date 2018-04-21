import * as PIXI from 'pixi.js';

class Asset {
  path:string;

  constructor(path:string) {
    this.path = path;
  }

  texture() {
    return PIXI.loader.resources[this.path].texture;
  }
}

export default {
  images: {
    boat: new Asset('assets/images/boat.png'),
    water: new Asset('assets/images/water.png'),
    button: new Asset('assets/images/button.png')
  }
};