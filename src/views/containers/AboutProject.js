import React from 'react';
import Chart from 'chart.js';
import {assetHex} from '../../assets/images/hex/hex';
import {projectImages} from "../../assets/images/projects/projectImages";
import '../../assets/styles/projects.css';

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
                this.generateChart(data.languages);
            });
        });
    }

    generateChart(languages) {
        const languageList = {
            names: [],
            values: []
        };
        for(let key in languages) {
            languageList.names.push(key);
            languageList.values.push(languages[key]);
        }
        console.log(languageList);

        const ctx = document.getElementById("githubChart").getContext('2d');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: languageList.names,
                datasets: [{
                    label: '# of Votes',
                    data: languageList.values,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                rotation: 1 * Math.PI,
                circumference: 1 * Math.PI,
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 10,

                    }
                },
            },
        });

        Chart.pluginService.register({
            beforeDraw: function(chart) {
                const width = chart.chart.width,
                    height = chart.chart.height,
                    ctx = chart.chart.ctx;

                ctx.restore();
                const fontSize = (height / 150).toFixed(2);
                ctx.fillStyle = '#FFF';
                ctx.font = fontSize + "em sans-serif";
                ctx.textBaseline = "middle";

                const text = "Composition",
                    textX = Math.round((width - ctx.measureText(text).width) / 2),
                    textY = height / 1.5;

                ctx.fillText(text, textX, textY);
                ctx.save();
            }
        });
    }

    componentWillReceiveProps(nextProps){
        this.props = nextProps;
    }

    loadProjectAssets(project){
        const assetList = [];
        for (let key in project.assets){
            assetList.push(<img src={assetHex[project.assets[key]]} key={key} alt="ProjectAsset"/>)
        }
        return assetList;
    }

    render() {
        const project = this.state.project;
        const projectAssets = this.loadProjectAssets(project);
        return(
            <div>
                <div className="CornerThumbnailContainer">
                    <div className="CornerThumbnail">
                        <img src={projectImages[project.image]} alt="Thumbnail"/>
                    </div>
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
                            <div className="ProjectLink">
                                Read more about the project here: <a href={ project.link }>GitHub</a>
                            </div>
                            <div className="ProjectAssets">
                                { projectAssets }
                            </div>
                        </div>

                        <div className="ProjectContentRight">
                            <div className="githubChartContainer">
                                <canvas id="githubChart"/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}