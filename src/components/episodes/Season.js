import React from 'react';
import '../../styles/Episodes/Season/Season.css';
import Episode from './Episode';

const Season = ({ season, episodes }) => {
  return (
    <div className="season__container flex__column center__align">
      <h3>{season}</h3>
      <span className="season__divider" />
      {episodes.map((item) => (
        <Episode episode={item} />
      ))}
    </div>
  );
};

export default Season;
