/**
 * Created by martinlunde on 24.09.2017.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import Lunde from '../../../assets/images/lunde.png'

// Big L for my last name, meant to be used on frontpage.
const CenteredHexagon = () => {
    return(
        <li className="hex hex_l">
            <div className="hexIn">
                <Link className="hexLink" to="/projects">
                    <img alt="Lunde" src={Lunde} />
                </Link>
            </div>
        </li>
    );
};

export default CenteredHexagon;