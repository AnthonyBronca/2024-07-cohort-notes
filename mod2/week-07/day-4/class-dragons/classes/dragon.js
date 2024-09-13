class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  breathesFire() {
    // ${name} breathes fire everywhere! BURN!!!!
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }

  static getDragons(...dragons) {
    // let res = [];

    // for (let i = 0; i < dragons.length; i++) {
    //   let dragon = dragons[i];

    //   res.push(dragon.name);
    // }

    // for (const dragon of dragons) {
    //   res.push(dragon.name);
    // }

    // return res;

    return dragons.map(dragon => dragon.name);
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
