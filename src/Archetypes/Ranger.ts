import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  static instance = 0;

  constructor(name:string) {
    super(name);
    Ranger.instance += 1;
  }

  energyType: EnergyType = 'stamina';

  static createdArchetypeInstances = (): number => Ranger.instance;
}