// MovieSearch.js
import React, { useState, useEffect } from 'react';

const MovieSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    // Implement IMDb API integration here to fetch movie suggestions based on searchQuery
    // You may use a library like axios for API requests

    // Example: Fetch suggestions from IMDb API (replace with actual IMDb API endpoint)
    const fetchSuggestions = async () => {
      try {
        const response = await fetch(`https://api.imdb.com/search?q=${searchQuery}`);
        const data = await response.json();
        setSuggestions(data.results); // Adjust this based on IMDb API response structure
      } catch (error) {
        console.error('Error fetching movie suggestions:', error);
      }
    };

    // Fetch suggestions when searchQuery changes
    fetchSuggestions();
  }, [searchQuery]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="SearchBar">
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search for movies..."
        className="SearchInput"
      />
      <ul className="SearchSuggestions">
        {suggestions.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieSearch;
