import React from 'react';
import '../../assets/styles/projects.css';
import {Project} from "../components/Projects/Project";

export class Projects extends React.Component {
    constructor(){
        super();
        this.projectList = [
            {
                _id: "0001",
                title: "Project 1",
                link: "/",
                lightDescription: "this is a light description",
                description: "This is a bit more heavy description that should not be used in the thumbnail."
            },
            {
                _id: "0002",
                title: "Project 1",
                link: "/",
                lightDescription: "this is a light description",
                description: "This is a bit more heavy description that should not be used in the thumbnail."
            },
        ];
    }

    componentDidMount() {
    }

    loadProjects(p){
        let result = [];
        for (let key in p) {
            result.push(
                <Project
                    _id={p[key]._id}
                    key={p[key]._id}
                    title={p[key].title}
                    link={p[key].link}
                    light={p[key].lightDescription}
                    desc={p[key].description}
                />
            )
        }
        return result;
    }

    render() {
        const projects = this.loadProjects(this.projectList);
        console.log(projects);
        return(
            <div>
                <div className="ProjectContainer">
                    { projects }
                </div>
                <div className="FooterWrapper">
                    <div className="Footer">
                        <h1>Featured Projects</h1>
                    </div>
                </div>
            </div>
        );
    }
}