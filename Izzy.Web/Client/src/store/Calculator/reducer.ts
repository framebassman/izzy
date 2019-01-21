import {RandomPerson} from '../model/RandomPerson';
import {Person} from '../model/Person';
import {CalculatorState} from './state';
import {incrementCountType, decrementCountType, calculateType} from './actions';

function initPeople(): Person[] {
    const arr: Person[] = [];
    arr.push(new RandomPerson());
    return arr;
}

const initialState: CalculatorState = { quantity: 1, people: initPeople(), transfers: []};

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

    if (action.type === calculateType) {
        const transfers = action.payload.data;
        return { ...state, transfers: transfers};
    }

    return state;
};