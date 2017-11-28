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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Nunc sed velit dignissim sodales ut. Accumsan in
                        nisl nisi scelerisque eu ultrices vitae auctor eu. Aenean
                        pharetra magna ac placerat vestibulum lectus mauris.
                        Massa tincidunt nunc pulvinar sapien et ligula ullamcorper
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