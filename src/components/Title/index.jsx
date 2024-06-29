import React from 'react';

const Title = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      {!children ? null : <p>{children}</p>}
    </div>
  );
};

export default Title;
