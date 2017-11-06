/**
 * Created by martinlunde on 30.06.2017.
 */
import React from 'react';
import '../../assets/styles/hexagons.css';

import HiddenHexagon from '../components/HexagonGrid/HiddenHexagon';
import HighlightedHexagon from '../components/HexagonGrid/HighlightedHexagon';
import CenteredHexagon from '../components/HexagonGrid/CenteredHexagon';

/* The HexagonialGrid function exist mainly to implement the honeycomb pattern
 * at the front-page, such that certain projects are highlighted.
 */

const HexagonalGrid = (props) => {
    //Generating hexagons in a grid, such that the highlighted projects easily can be updated through a database.
    let rows = [];
    let x = 0;
    for (let i=0; i < 10; i++) {
        if(i < 3){
            rows.push(<HiddenHexagon key={i}/>);
        }else {
            if (i === 6) {
                rows.push(<CenteredHexagon key={i}/>);
            } else {
                rows.push(<HighlightedHexagon key={i} link={props.projects[props.highlighted[x]].link}
                                              title={props.projects[props.highlighted[x]].title}
                                              text={props.projects[props.highlighted[x]].text}
                                              id={props.projects[props.highlighted[x]].id}/>);
                x++;
            }
        }
    }
    return (
        <div className="hexGridContainer">
            <ul className="hexGrid">
                {rows}
            </ul>
        </div>
    );
};

export default HexagonalGrid;