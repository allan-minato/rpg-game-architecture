import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  static instance = 0;

  constructor(name:string) {
    super(name);
    Warrior.instance += 1;
  }

  energyType: EnergyType = 'stamina';

  static createdArchetypeInstances = (): number => Warrior.instance;
}