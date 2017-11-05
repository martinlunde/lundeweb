/**
 * Created by martinlunde on 24.09.2017.
 */
import React from 'react';
import { Link } from 'react-router-dom';

// Hexagons intended to be used at the frontpage.
function HighlightedHexagon (props) {
    return(
        <li className="hex">
            <div className="hexIn">
                <Link className="hexLink" to={"/projects/" + props.id}>
                    <img src="https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg" alt="" />
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                </Link>
            </div>
        </li>
    );
}

export default HighlightedHexagon;