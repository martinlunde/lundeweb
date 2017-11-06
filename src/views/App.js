//Libs
import React from 'react';
import {Route} from 'react-router-dom';

//Components
import HexagonalGrid from './containers/HexagonGrid';
import NavigationBar from './containers/NavigationBar';
import ProjectGallery from './containers/ProjectGallery';
import SingelProject from './containers/SingelProject';

//CSS

//Define highligted project objects
const highlighted = [3214, 1243, 5555, 1234, 6612, 5972];
const PROJECTS = {
    3214: {
        id: 3214,
        link: "/",
        title: "martinlunde.no",
        text: "This is my homepage!"
    },
    1243: {
        id: 1243,
        link: "/projects",
        title: "Yahoo!",
        text: "This is my favourite search engine!"
    },
    5555: {
        id: 5555,
        link: "/projects/",
        title: "projects/test",
        text: "This is my favourite search engine!"
    },
    1234: {
        id: 1234,
        link: "/",
        title: "Google",
        text: "This is my favourite search engine!"
    },
    6612: {
        id: 6612,
        link: "/",
        title: "Samfundet Booking",
        text: "Dette er et bookingsystem for samfundet."
    },
    5972: {
        id: 5972,
        link: "/",
        title: "Google",
        text: "This is my favourite search engine!"
    }
};

class App extends React.Component {
  render() {
    return (
        <div className="Container">
            <NavigationBar />
            <div>
                <Route exact path="/" render={ () => <HexagonalGrid projects={PROJECTS} highlighted={highlighted}/>}/>
                <Route exact path="/projects" render={ () => <ProjectGallery projects={PROJECTS}/>}/>
                <Route path="/projects/:id" render={ () => <SingelProject projects={PROJECTS}/>}/>
            </div>
        </div>
    );
  }
}

export default App;

