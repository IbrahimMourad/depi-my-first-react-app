import React from 'react';

const Img = ({ src, alt, height, width }) => {
  return <img src={src} alt={alt} width={width} height={height} />;
};

export default Img;
