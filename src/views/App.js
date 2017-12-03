//Libs
import React from 'react';
import {Route} from 'react-router-dom';

//Components
import NavigationBar from './containers/NavigationBar';
import {Home} from './containers/Home';
import {Projects} from "./containers/Projects";

//CSS
import '../assets/styles/main.css';


class App extends React.Component {
  render() {
    return (
        <div className="Container">
            <NavigationBar />
            <div className="contentContainer">
                <div className="renderedContent">
                    <Route exact path="/" render={ () => <Home/>}/>
                    <Route exact path ="/projects" render={ () => <Projects/>}/>
                </div>
            </div>
        </div>
    );
  }
}

export default App;

