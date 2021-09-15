import React, { Component } from 'react';

const FaceRecgonition = ({ imageUrl }) => {
  return (
    <div className="center ma">
      <div className="absolute mt-2 pa5">
        <img alt="" src={ imageUrl } width="300px" height="auto" />
      </div>
    </div>
  );
}

export default FaceRecgonition;