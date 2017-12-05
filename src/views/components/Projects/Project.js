import React from 'react';
import { Link } from 'react-router-dom';
import temporary from '../../../assets/images/blockbuster.png';

export const Project = (props) => {
    const image = temporary;

    return(
        <Link to={"projects/" + props._id}>
            <div className="Project" style={{backgroundImage: `url(${image})`}}>
                <div className="triangle">
                    <h1 className="ProjectTitle">{props.title}</h1>
                </div>
            </div>
        </Link>
    );
};