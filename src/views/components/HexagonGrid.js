import React from 'react';
import photo from '../../assets/images/Hexagrid.png';
import '../../assets/styles/main.css';

export const HexagonGrid = () => {
    return(
      <div className="HexagonGrid">
          <img src={photo} alt="Hexagon Grid"/>
      </div>
    );
};