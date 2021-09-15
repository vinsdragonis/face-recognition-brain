import React, { Component } from 'react';
import './FaceRecgonition.css';

const FaceRecgonition = ({ imageUrl, box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt-2 pa5">
        <img id="inputImage" alt="" src={ imageUrl } width="300px" height="auto" />
        <div className="bounding-box" style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
      </div>
    </div>
  );
}

export default FaceRecgonition;
