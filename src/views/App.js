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
var PROJECTS = [
    {
        id: 0,
        link: "/",
        title: "martinlunde.no",
        text: "This is my homepage!"
    },
    {
        id: 1,
        link: "/projects",
        title: "Yahoo!",
        text: "This is my favourite search engine!"
    },
    {
        id: 2,
        link: "/projects/",
        title: "projects/test",
        text: "This is my favourite search engine!"
    },
    {
        id: 3,
        link: "/",
        title: "Google",
        text: "This is my favourite search engine!"
    },
    {
        id: 4,
        link: "/",
        title: "Samfundet Booking",
        text: "Dette er et bookingsystem for samfundet."
    },
    {
        id: 5,
        link: "/",
        title: "Google",
        text: "This is my favourite search engine!"
    },
];

class App extends React.Component {
  render() {
    return (
        <div className="Container">
            <NavigationBar />
            <div>
                <Route exact path="/" render={ () => <HexagonalGrid projects={PROJECTS}/>}/>
                <Route exact path="/projects" render={ () => <ProjectGallery projects={PROJECTS}/>}/>
                <Route path="/projects/:id" render={ () => <SingelProject projects={PROJECTS}/>}/>
            </div>
        </div>
    );
  }
}

export default App;

