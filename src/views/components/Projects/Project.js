import React from 'react';
import { Link } from 'react-router-dom';
import temporary from '../../../assets/images/blockbuster.png';

export const Project = (props) => {
    const image = temporary;

    return(
        <Link className="ProjectsWrapper" to={"projects/" + props._id}>
            <div className="Projects" style={{backgroundImage: `url(${image})`}}>
                <div className="triangle">
                    <h1 className="ProjectsTitle">{props.title}</h1>
                </div>
            </div>
        </Link>
    );
};