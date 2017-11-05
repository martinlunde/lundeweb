/**
 * Created by martinlunde on 20.07.2017.
 */

import React from 'react';
import '../../assets/styles/singelProject.css';
import ImageHeader from '../components/SingelProject/ImageHeader';
import ProjectStatistics from '../components/SingelProject/ProjectStatistics';
import ProjectDescription from '../components/SingelProject/ProjectDescription';

/* Vision
Every -- means a new section

    image header, covering a part of the upper page.
    --
    3 circular graphs with percent inside to show much the project has
    used of resources.
    --
    description of project with link to sourcecode
    Description could be made up be sections again,
    where a section contains 1 image and a paragraph.
    This could make it possible to generate different descriptions
    on each project.


 */

const SingelProject = (props) => {
    let project_id = window.location.href;
    project_id = project_id.split("/projects/")[1];

    /* TODO Get the right project to access attributes */
    let project = props.projects[project_id];

    return(
        <div className="SingelProjectContainer">
            <ImageHeader/>
            <ProjectStatistics/>
            <h1>The id is {project_id} for project {project.id} and the title is {project.title}</h1>
            <ProjectDescription/>
        </div>
    );
};

export default SingelProject;