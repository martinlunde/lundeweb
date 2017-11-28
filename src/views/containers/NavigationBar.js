/**
 * Created by martinlunde on 30.06.2017.
 */

import React from 'react';
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
                <LinkButton title="Home" url="/"/>
                <LinkButton title="Projects" url="/"/>
                <LinkButton title="About" url="/"/>
                <LinkButton title="CV" url="/"/>
            </nav>
        );
    }
}

export default NavigationBar;