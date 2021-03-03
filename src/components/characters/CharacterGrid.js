import React from 'react';

import CharacterItem from './CharacterItem';

const CharacterGrid = ({ items }) => {
  return (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem item={item} key={item.char_id} />
      ))}
    </section>
  );
};

export default CharacterGrid;
