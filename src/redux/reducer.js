const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "POST_ACTION": {
      return [...state, action.payload];
    }
    case "GET_WORDSCOLLECTION": {
      return [...action.payload];
    }
    case "DELITE_ACTION": {
      return [...state, action.payload];
    }
    case "UPDATE_ACTION": {
      return [action.payload];
    }
    default:
      return state;
  }
}
