import React from 'react';
import '../../assets/styles/projects.css';
import {Project} from "../components/Projects/Project";

export class Projects extends React.Component {
    constructor(){
        super();
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        fetch('/api/projects').then( result => {
            result.json().then((data) => {
                this.setState({
                    projects: data
                });
            });
        });
    }

    loadProjects(p){
        let result = [];
        for (let key in p) {
            result.push(
                <Project
                    _id={p[key]._id}
                    key={p[key]._id}
                    title={p[key].title}
                />
            )
        }
        return result;
    }

    render() {
        const projects = this.loadProjects(this.state.projects);
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