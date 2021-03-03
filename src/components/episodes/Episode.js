import React from 'react';

const Episode = ({ episode }) => {
  return (
    <div className="episode flex__row">
      <span> {episode.episode_id}.</span>
      <span> {episode.title}</span>
    </div>
  );
};

export default Episode;
