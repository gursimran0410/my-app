const initialState = {
  searchState: '',
  data : [],
  apiUrl : '',
  cardsToShow : [],
  next : 3
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "setSearchState": {
      let update = {...state}
      update.searchState = action.payload
      return { ...update }
    }
    case "setDataState": {
      let update = {...state}
      update.data = action.payload
      return { ...update }
    }
    case "setLinkState": {
      let update = {...state}
      update.apiUrl = action.payload
      return { ...update }
    }
    case "setCardsToShow": {
      let update = {...state}
      update.cardsToShow = action.payload
      return { ...update }
    }
    case 'setNextState': {
      let update = {...state}
      update.next = action.payload
      return ({...update})
    }
    default:
      return state;
  }
}

export default rootReducer;
