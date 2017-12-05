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
            description: "This is my supreme homepage!",
            assets: ['mongo', 'node', 'react']
        },
];

for(let key in list_of_projects){
    let new_project = new project_model({
        title: list_of_projects[key].title,
        link: list_of_projects[key].link,
        lightDescription: list_of_projects[key].lightDescription,
        description: list_of_projects[key].description,
        assets: list_of_projects[key].assets
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