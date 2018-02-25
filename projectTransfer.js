//Load dependencies
const mongoose = require('mongoose');
const http = require('http');

//Connect to database: movies
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/lundeweb', { useMongoClient: true });
const db = mongoose.connection;

//Load movie model
const model = require('./models');
const project_model = model.Project;

//Check if connected to database
db.on('error', err => {
    console.log('Error while connecting to DB: ${err.message}') ;
});
db.once('open', () => {
    console.log('Server connected successfully to DB!');
});

//Drop the existing database with "movies" tag
mongoose.connection.collections['projects'].drop( function(err) {
    console.log('collection dropped');
});

list_of_projects = [
        {
            title: "Lundeweb",
            link: "https://github.com/martinlunde/lundeweb",
            lightDescription: "This is my homepage!",
            description: "While having a need to do something besides reading theory at the end\n of the semester, " +
            "this website was born. Lundeweb is a showcase website for all my ongoing and/or\n finished " +
            "projects that i find suitable to put on display, and everything else i would like to experiment\n" +
            "with to further improve my knowledge.",
            assets: ['mongo', 'express', 'reactHex', 'node'],
            image: 'lundeweb',
            languages: { JavaScript: 23188, CSS: 4340, HTML: 462, Shell: 246 }
        },
        {
            title: "BlockBuster",
            link: "https://github.com/martinlunde/IT2810-Angular",
            lightDescription: "IT2810 - Angular",
            description: "While taking the course IT2810 (Web Development) at NTNU, we had to deliver a website\n" +
            "based on Angular. BlockBuster was my groups answer to this task, and is a website for looking up movies\n" +
            "in a database developed by using the mean stack and Material-UI",
            assets: ['mongo', 'express', 'angular', 'node'],
            image: 'blockbuster',
            languages: { TypeScript: 72222, JavaScript: 53116, CSS: 13242, HTML: 12493 }
        },
        {
            title: "PIM",
            link: "https://github.com/martinlunde/IT2810-React-and-Native",
            lightDescription: "IT2810 - React",
            description: "While taking the course IT2810 (Web Development) at NTNU, we were introduced to the concept\n" +
            "of using more than just pure javascript, html and css. React is one the most popular frameworks at the time\n" +
            "writing, and we had to develop a 'Personal Information Manager' with calendar, notes and todolists.\n This was" +
            " an easier introduction to React, but did also include a dive into React-Native.",
            assets: ['mongo', 'express', 'reactHex', 'node'],
            image: 'pim',
            languages: { JavaScript: 103638, CSS: 15381, HTML: 1286 }
        },
        {
            title: "Samfundet",
            link: "https://github.com/martinlunde/IT1901",
            lightDescription: "IT1901 - Informatikk Prosjektarbeid 1",
            description: "One of my earlier projects pursuing my masters degree, was to develop a system keeping track\n" +
            " of different tasks at 'Samfundet'. This system was built on the earlier AngularJS platform and the " +
            "NoSQL database Firebase.",
            assets: ['firebase', 'angular', 'node'],
            image: 'samfundet',
            languages: { CSS: 102165, HTML: 47918, JavaScript: 31618 }
        },
        {
            title: "OnlineWeb",
            link: "https://github.com/dotkom/onlineweb4",
            lightDescription: "Online, Linjeforningen for informatikk",
            description: "As a student of Computer Science, i have also chosen to contribute to our\n" +
            " voluntary organization 'Online'. I am a part of the so called 'drifts- og utviklingskomiteen' where\n" +
            "we gather for weekly meetings throughout the semesters, to discuss the future of our platform OnlineWeb\n" +
            "and how it can be used to improve our day to day lives as students.",
            assets: ['django', 'reactHex', 'node', 'docker'],
            image: 'onlineweb',
            languages: { Python: 1089523, JavaScript: 770672, HTML: 460508, CSS: 69710, Makefile: 1604 }
        },
        {
            title: "RealBack",
            link: "https://github.com/martinlunde/RealBack",
            lightDescription: "Realtime Feedback Lecturer Application",
            description: "As a part of the subject TDT4140, we were assigned the task to create some kind of software" +
            "system to improve a regular day at school. My teams answer to this task, was the 'Realtime Feedback' system," +
            "making it easier to communicate with the lecturer in huge lectures. The system, which is built with django, " +
            "allows users to connect to a lecture-session using a random string, so that it is possible to write questions and " +
            "give feedback to the lecturer anonymously.",
            assets: ['django'],
            image: 'realback',
            languages: { Python: 82432, JavaScript: 55462, HTML: 35985, CSS: 16631 },
        }
];

for(let key in list_of_projects){
    let new_project = new project_model({
        title: list_of_projects[key].title,
        link: list_of_projects[key].link,
        lightDescription: list_of_projects[key].lightDescription,
        description: list_of_projects[key].description,
        assets: list_of_projects[key].assets,
        image: list_of_projects[key].image,
        languages: list_of_projects[key].languages
    });
    db.collection('projects').save(new_project,
        function(err, docs) {
            if (err) {
            } else {
                console.log("success");
            }
        }
    );
}