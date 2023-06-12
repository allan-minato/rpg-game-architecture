import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  static instance = 0;

  constructor(name:string) {
    super(name);
    Mage.instance += 1;
  }

  energyType: EnergyType = 'mana';

  static createdArchetypeInstances = (): number => Mage.instance;
}