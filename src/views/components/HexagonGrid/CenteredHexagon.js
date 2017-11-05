/**
 * Created by martinlunde on 24.09.2017.
 */
import React from 'react';
import { Link } from 'react-router-dom';

// Big L for my last name, meant to be used on frontpage.
const CenteredHexagon = () => {
    return(
        <li className="hex hex_l">
            <div className="hexIn">
                <Link className="hexLink" to="/projects">
                    <img alt="Lunde" src="../../../assets/images/l_lunde.png" />
                </Link>
            </div>
        </li>
    );
};

export default CenteredHexagon;