import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(protected player1: Fighter, protected oponents: SimpleFighter[]) {
    super(player1);
  }

  fight(): number {
    this.oponents.forEach((oponent) => {
      while (this.player1.lifePoints !== -1 && oponent.lifePoints !== -1) {
        this.player1.attack(oponent);
        oponent.attack(this.player1);
      }
    });
    return super.fight();
  }
}