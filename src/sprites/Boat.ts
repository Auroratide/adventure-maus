import * as PIXI from 'pixi.js';
import assets from '../assets';

enum Lane {
  Front = 'LANE::FRONT',
  Back = 'LANE::BACK'
};

export default class Boat extends PIXI.Sprite {
  lane:Lane;
  shadowBoat:PIXI.Sprite;
  constructor(shadowBoat:PIXI.Sprite) {
    super(assets.images.boat.texture());
    this.lane = Lane.Front;
    this.shadowBoat = shadowBoat;
  }

  moveToBackLane() {
    console.log('boat moved to back');
    this.parent.swapChildren(this, this.shadowBoat);
    this.lane = Lane.Back;
  }
  
  moveToFrontLane() {
    console.log('boat moved to front');
    this.parent.swapChildren(this, this.shadowBoat);
    this.lane = Lane.Front;
  }

  toggleLane() {
    if(this.lane === Lane.Front) {
      this.moveToBackLane();
    } else {
      this.moveToFrontLane();
    }
  }

}