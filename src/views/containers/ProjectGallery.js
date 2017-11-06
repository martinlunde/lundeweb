/**
 * Created by martinlunde on 19.07.2017.
 */

import React from 'react';
import ProjectDisplayBox from '../components/ProjectGallery/ProjectDisplayBox';
import '../../assets/styles/projectGallery.css';

const ProjectGallery = (props) => {
    let displayBoxes = [];
    for(let key in props.projects){
        displayBoxes.push(<ProjectDisplayBox key={key}
                                             title={props.projects[key].title}
                                             link={props.projects[key].link}
                                             id={props.projects[key].id}/>)
    }
    return(
        <div className="ProjectGalleryContainer">
            { displayBoxes }
        </div>
    )
};

export default ProjectGallery;