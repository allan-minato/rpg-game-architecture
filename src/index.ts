import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Monster from './Monster';

const player1 = new Character('player1');
const player2 = new Character('player2');
const player3 = new Character('player3');

for (let level = 0; level < 5; level += 1) {
  player1.levelUp();
}

const monster1 = new Monster();
const monster2 = new Monster();

const pvp = new PVP(player2, player3);

const pve = new PVE(player1, [monster1, monster2]);

const runBattles = (battles: Battle[]) => {
  battles.forEach((battle) => {
    battle.fight();
  });
};

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };