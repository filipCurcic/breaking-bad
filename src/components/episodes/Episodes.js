import React, { useEffect, useState } from 'react';

import axios from 'axios';

import Search from '../ui/Search';
import '../../styles/Episodes/Episodes.css';
import Season from './Season';

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/episodes?series=Breaking+Bad`
      );
      console.log(result.data.filter((item) => item.season === '1'));
      setEpisodes(result.data);
      setIsLoading(false);
      console.log(result.data);
    };
    fetchItems();
  }, []);
  return (
    <div>
      <Search />
      <div className="episodes__seasonsContainer flex__row  ">
        <Season
          season="Season one"
          episodes={episodes.filter((item) => item.season === '1')}
        />
        <Season
          season="Season two"
          episodes={episodes.filter((item) => item.season === '2')}
        />
        <Season
          season="Season three"
          episodes={episodes.filter((item) => item.season === '3')}
        />
        <Season
          season="Season four"
          episodes={episodes.filter((item) => item.season === '4')}
        />
        <Season
          season="Season five"
          episodes={episodes.filter((item) => item.season === '5')}
        />
      </div>
    </div>
  );
};

export default Episodes;
