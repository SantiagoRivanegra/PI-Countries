//Llevo al store
const initialState = {
  countries: [],
  activities: []
}

function reducer(state=initialState, {type, payload}) {
  switch (type) {
    case "GET_COUNTRY":
    return {
      ...state,
      countries: payload
    }
    default: return state
  }
}

export default reducer;