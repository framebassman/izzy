import {Person} from './model/Person';

export interface CalculatorState {
  quantity: number;
  people: Person[];
  transfers: any[];
}
