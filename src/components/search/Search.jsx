import React from 'react';
import PropTypes from 'prop-types';
import './Search.scss';

const Search = (props) => {

  const handleChange = (e) => {
    props.onInputChange(e.target.value)
  }

  return (
    <div className="search">
      <label htmlFor={ props.label } className="search_label">{ props.label }:</label> 
      <input type="text" className="search_field" onChange={ handleChange } />
    </div>
  );
}

Search.propTypes = {
  onInputChange: PropTypes.func
}

export default Search;
