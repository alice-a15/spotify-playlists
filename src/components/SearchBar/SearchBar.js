import React from 'react'
import './SearchBar.css'

function SearchBar ({ changeSearchTerm, isLoading, onSearch, searchTerm }) {
  const handleTermChange = (e) => {
    changeSearchTerm(e.target.value)
  }

  return (
    <form className="SearchBar">
      <input onChange={handleTermChange} placeholder="Enter A Song, Album, or Artist" value={searchTerm}/>
      <button className="SearchButton" onClick={onSearch} disabled={isLoading}>{isLoading ? 'LOADING...' : 'SEARCH'}</button>
    </form>
  )
}

export default SearchBar
