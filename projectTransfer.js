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
            link: "/",
            lightDescription: "This is my homepage!",
            description: "While having a need to do something besides reading theory at the end\n of the semester, " +
            "this website was born. Lundeweb is a showcase website for all my ongoing and/or\n finished " +
            "projects that i find suitable to put on display, and everything else i would like to experiment\n" +
            "with to further improve my knowledge.",
            assets: ['mongo', 'express', 'react', 'node'],
            image: 'lundeweb'
        },
        {
            title: "BlockBuster",
            link: "/",
            lightDescription: "IT2810 - Angular",
            description: "While taking the course IT2810 (Web Development) at NTNU, we had to deliver a website\n" +
            "based on Angular. BlockBuster was my groups answer to this task, and is a website for looking up movies\n" +
            "in a database developed by using the mean stack and Material-UI",
            assets: ['mongo', 'express', 'angular', 'node'],
            image: 'blockbuster'
        },
        {
            title: "Personal Information Manager",
            link: "/",
            lightDescription: "IT2810 - React",
            description: "While taking the course IT2810 (Web Development) at NTNU, we were introduced to the concept\n" +
            "of using more than just pure javascript, html and css. React is one the most popular frameworks at the time\n" +
            "writing, and we had to develop a 'Personal Information Manager' with calendar, notes and todolists.\n This was" +
            "an easier introduction to React, but did also include a dive into React-Native.",
            assets: ['mongo', 'express', 'react', 'node'],
            image: 'react'
        },
        {
            title: "Samfundet - Booking",
            link: "/",
            lightDescription: "IT1901 - Informatikk Prosjektarbeid 1",
            description: "One of my earlier projects pursuing my masters degree, was to develop a system keeping track\n" +
            " of different tasks at 'Samfundet'. This system was built on the earlier AngularJS platform and the " +
            "NoSQL database Firebase.",
            assets: ['firebase', 'angular', 'node'],
            image: 'samfundet'
        }
];

for(let key in list_of_projects){
    let new_project = new project_model({
        title: list_of_projects[key].title,
        link: list_of_projects[key].link,
        lightDescription: list_of_projects[key].lightDescription,
        description: list_of_projects[key].description,
        assets: list_of_projects[key].assets,
        image: list_of_projects[key].image
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