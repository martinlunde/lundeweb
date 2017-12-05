import React from 'react';
import '../../assets/styles/projects.css';
import {assetHex} from '../../assets/images/hex/hex';
import {projectImages} from "../../assets/images/projects/projectImages";

export class AboutProject extends React.Component {
    constructor(props){
        super(props);
        this.currentProjectId = window.location.pathname.substring(10);
        this.state = {
            project: {}
        };
    }

    componentDidMount(){
        fetch('/api/project?id=' + this.currentProjectId).then( result => {
            result.json().then((data) => {
                this.setState({
                    project: data
                });
            });
        });
    }

    componentWillReceiveProps(nextProps){
        this.props = nextProps;
    }

    loadProjectAssets(project){
        const assetList = [];
        for (let key in project.assets){
            assetList.push(<img src={assetHex[project.assets[key]]} alt="ProjectAsset"/>)
        }
        return assetList;
    }

    render() {
        const project = this.state.project;
        const projectAssets = this.loadProjectAssets(project);
        return(
            <div>
                <div className="CornerThumbnail">
                    <img src={projectImages[project.image]}/>
                </div>
                <div className="ProjectWrapper">
                    <div className="ProjectContent">

                        <div className="ProjectContentLeft">
                            <div className="ProjectTitle">
                                { project.title }
                            </div>
                            <div className="ProjectText">
                                { project.description }
                            </div>
                            <div className="ProjectAssets">
                                { projectAssets }
                            </div>
                        </div>

                        <div className="ProjectContentRight">

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}