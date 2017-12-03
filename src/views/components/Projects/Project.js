import React from 'react';
import test from '../../../assets/images/blockbuster.png';

export const Project = (props) => {
    const image = test;

    return(
        <div className="Project" style={{backgroundImage: `url(${image})`}}>
            <div className="triangle">
                <h1 className="ProjectTitle">test</h1>
            </div>
        </div>
    );
};