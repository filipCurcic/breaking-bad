import { getSuggestedQuery } from '@testing-library/react';
import React, { useState } from 'react';

const Search = ({ getQuery }) => {
  const [text, setText] = useState('');
  const onChange = (query) => {
    setText(query);
    getQuery(query);
  };
  return (
    <section className="search">
      <form>
        <input
          autoFocus
          type="text"
          className="form-control"
          placeholder="Search"
          value={text}
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Search;
