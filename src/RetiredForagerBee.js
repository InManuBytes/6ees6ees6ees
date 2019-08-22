// Create a RetiredForagerBee class, in ES6 style, with:
//  [x] the ForagerBee superclass
//  [x] an age property that is set to 40
//  [x] a job property that is set to gamble
//  [x] a canFly property that is set to false
//  [x] a color property that is set to grey
//  [x] a forage method that returns I am too old, let me play cards instead
//  [-] a food property that is inherited from grub
//  [-] an eat method that is inherited from grub
//  [-] a treasureChest property inherited from ForagerBee that is set to an empty array []
//  [x] an always winning gamble method that allows the bee to add a treasure to the treasureChest

class RetiredForagerBee extends ForagerBee {
  constructor () {
    super();
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';
  }
  forage () {
    return 'I am too old, let me play cards instead';
  }
  gamble (treasure) {
    this.treasureChest.push(treasure);
  }
};
