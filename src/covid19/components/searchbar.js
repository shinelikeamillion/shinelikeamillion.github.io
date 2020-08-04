import React, { useState } from "react"
import { useStateValue, selectePlace } from "../state/index"
import { nameMap } from "../data/citymap"
import { SearchOutline } from "@styled-icons/evaicons-outline/SearchOutline"

const SearchBar = ({ nameMap }) => {
  const [searchResults, setResults] = useState([])
  const [, useDispatch] = useStateValue()
  return (
    <div
      className="search_bar"
      onPointerLeave={() => {
        setResults([])
        document.getElementById("searchField").value = ""
      }}
    >
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
      <div className="search">
        <input
          id="searchField"
          onChange={ev => {
            const values = Object.keys(nameMap).filter(
              i =>
                ev.target.value &&
                (i.startsWith(ev.target.value) ||
                  nameMap[i].startsWith(ev.target.value))
            )
            setResults(values)
            document.getElementById("searchField").value = ""
          }}
        />
        <SearchOutline />
      </div>
    </div>
  )
}

export default SearchBar
