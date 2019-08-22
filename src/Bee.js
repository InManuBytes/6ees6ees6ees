// Create a Bee class, in ES6 style, with:
//  [x] the Grub superclass
//  [x] an age property that is set to 5
//  [x] a color property that is set to yellow
//  [-] a food property that is inherited from grub
//  [-] an eat method that is inherited from grub
//  [x] a job property that is set to Keep on growing

class Bee extends Grub {
  constructor () {
    super();
    super.age = 5;
    super.color = 'yellow';
    this.job = 'Keep on growing'
  }
};
