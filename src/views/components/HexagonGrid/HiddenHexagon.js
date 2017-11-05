/**
 * Created by martinlunde on 24.09.2017.
 */
import React from 'react';

// Extra HiddenHexagons to stabilize the hexagonal pattern in a 2-3-2 formation.
const HiddenHexagon = () => {
    return(
        <li className="hex">
            <div className="hexIn hiddenHex">
            </div>
        </li>
    );
};

export default HiddenHexagon;