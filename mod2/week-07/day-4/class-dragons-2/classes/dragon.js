class Dragon {
    constructor(name, color) {
      this.name = name;
      this.color = color;
    }

    breathesFire() {
      //${name} breathes fire everywhere! BURN!!!!
      return `${this.name} breathes fire everywhere! BURN!!!!`;
    }

    static getDragons(...dragons) {
      // return dragons.map(dragon => dragon.name);

      let res = [];

      for (let i = 0; i < dragons.length; i++) {
        let dragon = dragons[i];
        res.push(dragon.name);
      }

      return res;
    }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
