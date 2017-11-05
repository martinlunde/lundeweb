/**
 * Created by martinlunde on 24.09.2017.
 */
import React from 'react';
import { Link } from 'react-router-dom';

function ProjectDisplayBox(props) {
    return(
        <Link className="ProjectDisplayBox" to= {'/projects/' + props.id}>
            <div className="PDB_Title">{props.title}</div>
            <div className="PBD_Content">
                <img src="https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg" alt="" />
            </div>

        </Link>
    )
}

export default ProjectDisplayBox;