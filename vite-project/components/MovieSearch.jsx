// MovieSearch.js
import React, { useState, useEffect } from 'react';
import AddList from './AddList';
const MovieSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState(null);

  const fetchSuggestions = async () => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?t=${searchQuery}&apikey=ab3a1df`);
      const data = await response.json();
      setSuggestions(data); // Adjust this based on IMDb API response structure
      console.log(data);

    } catch (error) {
      console.error('Error fetching movie suggestions:', error);
    }
  };

  // useEffect(() => {
  //   if(searchQuery!=""){
  //     fetchSuggestions();
  //   }else{
  //     setSuggestions(null);
  //   }
  //   // Fetch suggestions when searchQuery changes
  //   fetchSuggestions();
  // }, [searchQuery]);
  const handleSearch=(e)=>{
    e.preventDefault();
    if(searchQuery!=""){
      fetchSuggestions();
    }
    else{
      setSuggestions(null);
    }
  }
  const handleInputChange = (e) => { 
    setSearchQuery(e.target.value);
  };

  return (
    <div className='MovieParent'>
    <div className="SearchBar">
      <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search for movies..."
        className="SearchInput"
      />
      </form>
      </div>
      {
        suggestions==null||suggestions.Response == 'False'?<><p>No results found! Enter full title.</p></>: (
          <div className='MovieDetails'>
            <div className='Movie-column poster'>
              <img src={suggestions.Poster} alt="poster" />
            </div>
            <div className='Movie-column details'>
              <h1>{suggestions.Title}</h1>
              <p>Genre: {suggestions.Genre}</p>
              <p>Director: {suggestions.Director}</p>
              <p>Actors: {suggestions.Actors}</p>
              <p>Plot: {suggestions.Plot}</p>
              <p className='MovieID'>{suggestions.imdbID}</p>
              <AddList/>
            </div>
            
          </div>
          
        )
        
      }
    </div>
  );
};

export default MovieSearch;
