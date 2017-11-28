import React from 'react';
import {HexagonGrid} from '../components/HexagonGrid';
import GithubLogo from '../../assets/images/github.png';
import LinkedIn from '../../assets/images/linkedin.png';

export class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="HomePageTextWrapper">
                    <div className="HomePageTitle">
                        Lundeweb
                    </div>
                    <div className="HomePageText">
                        Welcome to my personal website! <br/>
                        The purpose of this project is to make a showcase of my
                        portfolio rather than linking directly to repositories of code.
                        There will also, in the future, be an available CV and documentation.
                    </div>
                    <div className="LinkIcons">
                        <a href="https://github.com/martinlunde" className="GithubLogo">
                            <img src={GithubLogo} alt="GithubLogo"/>
                        </a>
                        <a href="https://linkedin.com/in/martinlunde" className="LinkedInLogo">
                            <img src={LinkedIn} alt="LinkedInLogo"/>
                        </a>
                    </div>
                </div>
                <div className="HexagonGridWrapper">
                    <HexagonGrid />
                </div>
            </div>
        );
    };
}