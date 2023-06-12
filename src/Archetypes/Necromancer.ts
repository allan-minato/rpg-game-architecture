import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  static instance = 0;

  constructor(name:string) {
    super(name);
    Necromancer.instance += 1;
  }

  energyType: EnergyType = 'mana';

  static createdArchetypeInstances = (): number => Necromancer.instance;
}