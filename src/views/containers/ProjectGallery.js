/**
 * Created by martinlunde on 19.07.2017.
 */

import React from 'react';
import ProjectDisplayBox from '../components/ProjectGallery/ProjectDisplayBox';
import '../../assets/styles/projectGallery.css';

const ProjectGallery = (props) => {

    let displayBoxes = [];
    let x = 0;
    for(let i = props.projects.length; i > 0; i--){
        displayBoxes.push(<ProjectDisplayBox key={x}
                                             title={props.projects[x].title}
                                             link={props.projects[x].link}
                                             id={props.projects[x].id}/>);
        x++;
    }

    return(
        <div className="ProjectGalleryContainer">
            { displayBoxes }
        </div>
    )
};

export default ProjectGallery;