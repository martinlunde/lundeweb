import React from 'react';
import { Link } from 'react-router-dom';
import {projectImages} from "../../../assets/images/projects/projectImages";

export const Project = (props) => {
    const image = projectImages[props.image];

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