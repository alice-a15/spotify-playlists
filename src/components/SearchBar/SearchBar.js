import React from 'react'
import './SearchBar.css'

function SearchBar ({ changeSearchTerm, onSearch, searchTerm }) {
  const handleTermChange = (e) => {
    changeSearchTerm(e.target.value)
  }

  return (
    <div className="SearchBar">
      <input onChange={handleTermChange} placeholder="Enter A Song, Album, or Artist" value={searchTerm}/>
      <button className="SearchButton" onClick={onSearch} >SEARCH</button>
    </div>
  )
}

export default SearchBar
