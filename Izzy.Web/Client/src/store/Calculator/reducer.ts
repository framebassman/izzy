import {RandomPerson} from '../model/RandomPerson';
import {Person} from '../model/Person';
import {CalculatorState} from './state';
import {incrementCountType, decrementCountType, calculateType} from './actions';

function initPeople(): Person[] {
    const arr: Person[] = [];
    arr.push(new RandomPerson());
    return arr;
}

const initialState: CalculatorState = { people: initPeople(), transfers: []};

export const reducer = (state: any, action: any) => {
    state = state || initialState;

    if (action.type === incrementCountType) {
        const current = state.people;
        let next: Person[] = [];
        next = next.concat(current);
        next.push(new RandomPerson())
        return { ...state, people: next };
    }

    if (action.type === decrementCountType) {
        const current = state.people;
        let next: Person[] = [];
        next = next.concat(current);
        next.pop()
        return { ...state, people: next };
    }

    if (action.type === calculateType) {
        const transfers = action.payload.data;
        return { ...state, transfers: transfers};
    }

    return state;
};