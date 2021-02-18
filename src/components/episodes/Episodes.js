import React, { useEffect, useState } from 'react';

import axios from 'axios';

import Search from '../ui/Search';

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/episodes?series=Breaking+Bad`
      );
      setEpisodes(result.data[0]);
      console.log(result.data.filter((item) => item.season === '1'));
      setIsLoading(false);
    };
    fetchItems();
  }, []);
  return (
    <div>
      <Search />
    </div>
  );
};

export default Episodes;
