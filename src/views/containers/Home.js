import React from 'react';
import {HexagonGrid} from "../components/HexagonGrid";

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
                </div>
                <div className="HexagonGridWrapper">
                    <HexagonGrid />
                </div>
            </div>
        );
    };
}