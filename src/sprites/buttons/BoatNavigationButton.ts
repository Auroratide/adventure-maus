import * as PIXI from 'pixi.js';
import Boat from '../Boat';
import Button from './Button';

export default class BoatNavigationButton extends Button {
  boat:Boat;

  constructor(boat:Boat) {
    super();
    this.boat = boat;
    this.on('tap', this.onClick.bind(this));
    this.on('click', this.onClick.bind(this));
  }

  onClick(event) {
    this.boat.toggleLane();
  }
}