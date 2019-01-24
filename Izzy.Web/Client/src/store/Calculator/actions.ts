import axios from 'axios';

export const incrementCountType = 'INCREMENT_PERSON_COUNT';
export const decrementCountType = 'DECREMENT_PERSON_COUNT';
export const calculateType = 'CALCULATE';

export const actionCreators = {
    increment: () => ({ type: incrementCountType }),
    decrement: () => ({ type: decrementCountType }),
    calculate: (people: any) => async (dispatch: any) => {
        const url = '/api/calculator';
        const response = await axios.post(url, people);
        dispatch({
            type: calculateType,
            payload: response
        })
    }
};