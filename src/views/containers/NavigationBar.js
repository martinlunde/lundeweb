/**
 * Created by martinlunde on 30.06.2017.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import LinkButton from '../components/NavigationBar/LinkButton';
import '../../assets/styles/navbar.css';

class NavigationBar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            dropdown: false,
        }
    }

    render(){
        return(
            <nav className="NavbarContainer">
                <Link className="name-link" to="/">Martin Lunde</Link>
                <div className="navButtons">
                    <LinkButton title="Projects" url="/projects/" />
                    <LinkButton title="Button" url="/"/>
                    <LinkButton title="Button" url="/"/>
                </div>
            </nav>
        );
    }
}

export default NavigationBar;