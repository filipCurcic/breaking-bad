import React from 'react';

const Button = ({ title, click }) => {
  return (
    <button className="btn" onClick={click}>
      {title}
    </button>
  );
};

export default Button;
