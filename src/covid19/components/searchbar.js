import React, { useState } from "react"
import { useStateValue, selectePlace } from "../state/index"
import { nameMap } from "../data/citymap"

const SearchBar = ({ nameMap }) => {
  const [searchResults, setResults] = useState([])
  const [, useDispatch] = useStateValue()
  return (
    <div className="search_bar">
      <ul>
        {searchResults.map(result => (
          <li
            key={result}
            onClick={() => {
              useDispatch(selectePlace(nameMap[result]))
              setResults([])
            }}
          >
            {result}
          </li>
        ))}
      </ul>
      <input
        onChange={ev => {
          const values = Object.keys(nameMap).filter(
            i =>
              ev.target.value &&
              (i.startsWith(ev.target.value) ||
                nameMap[i].startsWith(ev.target.value))
          )
          setResults(values)
        }}
      />
    </div>
  )
}

export default SearchBar
