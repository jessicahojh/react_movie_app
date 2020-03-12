import React from "react";
import Button from 'react-bootstrap/Button';

const SearchBar = ({search, handleSubmit, handleSearch}) => {

  return (
    <form onSubmit={handleSubmit}>
      
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="search"
            name="search"
            placeholder="Search Movie Name"
            value={search}
            onChange={handleSearch}
          />
        </div>
      
      <Button type="submit" className="btn">
        Search Movie
      </Button>
    </form>
  );
};

export default SearchBar;