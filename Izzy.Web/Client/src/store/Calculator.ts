import { CalculatorState } from './CalculatorState';

import { RandomPerson } from './model/RandomPerson';
import { Person } from './model/Person';

const incrementCountType = 'INCREMENT_PERSON_COUNT';
const decrementCountType = 'DECREMENT_PERSON_COUNT';

function initPeople(): Person[] {
  const arr: Person[] = [];
  arr.push(new RandomPerson());
  return arr;
}

const initialState: CalculatorState = { quantity: 1, people: initPeople() };

export const actionCreators = {
  increment: () => ({ type: incrementCountType }),
  decrement: () => ({ type: decrementCountType })
};

export const reducer = (state: any, action: any) => {
  state = state || initialState;

  if (action.type === incrementCountType) {
    const current = state.people;
    current.push(new RandomPerson());
    return { ...state, quantity: state.quantity + 1, people: current };
  }

  if (action.type === decrementCountType) {
    const current = state.people;
    current.pop();
    return { ...state, quantity: state.quantity - 1, people: current };
  }

  return state;
};
