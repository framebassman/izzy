const incrementCountType = 'INCREMENT_PERSON_COUNT';
const decrementCountType = 'DECREMENT_PERSON_COUNT';
const initialState = { person: 1 };

export const actionCreators = {
  increment: () => ({ type: incrementCountType }),
  decrement: () => ({ type: decrementCountType })
};

export const reducer = (state: any, action: any) => {
  state = state || initialState;

  if (action.type === incrementCountType) {
    return { ...state, person: state.person + 1 };
  }

  if (action.type === decrementCountType) {
    return { ...state, person: state.person - 1 };
  }

  return state;
};
