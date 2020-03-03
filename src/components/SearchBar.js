import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';

const SearchBar = ({setSearch}) => {

    const handleSubmit = e => {
      setSearch = e.target.value;
    };

  return (
    <form onSubmit={handleSubmit}>
      
        <div className="form-group">
          <label htmlFor="search">Name: </label>
          <input
            type="text"
            className="form-control"
            id="search"
            name="search"
            placeholder="Search Movie Name"
            value={setSearch}
            onChange={handleSubmit}
          />
        </div>
      
      <Button type="submit" className="btn">
        Search Movie
      </Button>
    </form>
  );
};

export default SearchBar;