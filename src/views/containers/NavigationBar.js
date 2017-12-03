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
            active_button: 'Home',
        };

        this.onLinkChange = this.onLinkChange.bind(this);
    }

    onLinkChange(link) {
        this.setState({
            active_button: link
        });
    }

    render(){
        let navigation = [];
        const LinkButtons = {
            Home: {title: 'Home', url: '/', active: 'Home'},
            Projects: {title: 'Projects', url: '/projects'},
            About: {title: 'About', url: '/about'},
            CV: {title: 'CV', url: '/cv'}
        };

        for (let key in LinkButtons) {
            let nav = LinkButtons[key];
            navigation.push(<LinkButton title={nav.title}
                                        url={nav.url}
                                        onClick={() => this.onLinkChange(nav.url)}
                                        key={key}
                                        className={ this.state.active_button === nav.url ? 'ActiveLinkButton': '' }
            />)
        }

        return(
            <nav className="NavbarContainer">
                { navigation }
            </nav>
        );
    }
}

export default NavigationBar;