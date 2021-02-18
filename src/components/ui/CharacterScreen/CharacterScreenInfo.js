import React from 'react';

const CharacterScreenInfo = ({ info, data }) => {
  const getArray = () => {
    if (Array.isArray(data)) {
      return (
        <div>
          {data.map((item) => (
            <span className="characterScreen__infoArray" key={item.char_id}>
              {' '}
              {item}{' '}
            </span>
          ))}
        </div>
      );
    }
  };

  const characterData = <div>{data}</div>;

  return (
    <div className="characterScreen__info">
      <span className="characterScreen__infoContent flex__row">
        <span>
          <strong>{info}: </strong>{' '}
        </span>
        <span>{Array.isArray(data) ? getArray() : characterData}</span>
      </span>
      <span className="characterScreen__divider" />
    </div>
  );
};

export default CharacterScreenInfo;
