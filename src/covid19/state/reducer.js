export const reducer = (state, action) => {
  switch (action.type) {
    case "changeTab":
      return {
        ...state,
        tabIndex: action.payload,
      }
    case "selectePlace":
      return {
        ...state,
        selectedPlace: action.payload,
      }
    default:
      return state
  }
}

export const tabIndex = index => {
  return { type: "changeTab", payload: index }
}

export const selectePlace = name => {
  return { type: "selectePlace", payload: name }
}
