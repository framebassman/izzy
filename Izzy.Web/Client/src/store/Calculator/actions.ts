import axios from 'axios';
import { calculateUrl } from './urls';
import { Person } from './../model/Person';

export const incrementCountType = 'INCREMENT_PERSON_COUNT';
export const decrementCountType = 'DECREMENT_PERSON_COUNT';
export const calculateType = 'CALCULATE';

async function transfersFromBack(people: Person[]) {
  try {
    return await axios.post(calculateUrl, people); 
  }
  catch {
    return { data: [] };
  }
}

export const actionCreators = {
  increment: () => ({ type: incrementCountType }),
  decrement: () => ({ type: decrementCountType }),
  calculate: (people: Person[]) => async (dispatch: any) => {
    const response = await transfersFromBack(people);
    dispatch({
      type: calculateType,
      payload: response
    })
  }
};
