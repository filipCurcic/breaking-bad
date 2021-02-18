import React, { useState, useEffect } from 'react';

import axios from 'axios';

import CharacterGrid from '../characters/CharacterGrid';
import Search from './Search';

const Content = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setquery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);
  return (
    <div>
      <Search getQuery={(query) => setquery(query)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default Content;
