import React, { useContext, createContext, useReducer } from "react"
import jsonData from "../data/total_list.json"

const getOrganizedData = () => {
  const dataOfChina = jsonData.areaTree.find(item => item.name === "中国")
  return {
    total: jsonData.chinaTotal,
    // sorted by default
    detail: Object.values(dataOfChina.children).sort(
      (a, b) => b.total.confirm - a.total.confirm
    ),
  }
}

const initialState = {
  tabIndex: 0,
  china: getOrganizedData(),
  selectedPlace: "china",
}

const StateContext = createContext([initialState, () => initialState])

export const StateProvider = ({ reducer, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateValue = () => useContext(StateContext)
