// Create a HoneyMakerBee class, in ES6 style, with:
//  [x] the Bee superclass
//  [x] an age property that is set to 10
//  [x] a job property that is set to make honey
//  [-] a color property inherited from bee that is set to yellow
//  [-] a food property that is inherited from grub
//  [-] an eat method that is inherited from grub
//  [x] a honeyPot property that is set to 0
//  [x] a makeHoney method that adds 1 to that honeyBee's honeyPot
//  [x] a giveHoney method that subtracts 1 from that honeyBee's honeyPot

class HoneyMakerBee extends Bee {
  constructor () {
    super();
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }
  makeHoney () {
    this.honeyPot++;
  }
  giveHoney () {
    this.honeyPot--;
  }
};
