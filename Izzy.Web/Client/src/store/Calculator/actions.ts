import axios from 'axios';
import { calculateUrl } from "./urls";

export const incrementCountType = 'INCREMENT_PERSON_COUNT';
export const decrementCountType = 'DECREMENT_PERSON_COUNT';
export const calculateType = 'CALCULATE';

export const actionCreators = {
    increment: () => ({ type: incrementCountType }),
    decrement: () => ({ type: decrementCountType }),
    calculate: (people: any) => async (dispatch: any) => {
        const response = await axios.post(calculateUrl, people);
        dispatch({
            type: calculateType,
            payload: response
        })
    }
};
