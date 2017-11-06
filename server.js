/**
 * Created by martinlunde on 26.09.2017.
 */
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//connect to database: lundeweb
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/lundeweb', { useMongoClient: true });
const db = mongoose.connection;

//Check if connected to database
db.on('error', err => {
   console.log('Error while connecting to DB: ${err.message}') ;
});
db.once('open', () => {
    console.log('Server connected successfully to DB!');
});

// Parser for POST data
app.use(bodyParser.json());

// Set api route
app.use('/api', router);

app.use(express.static(__dirname + '/build/static'));

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/build/index.html');
});

app.listen(8000, function () {
    console.log('\nThe server is now running on port 8000...\n' +
        'Press ctrl + C to shutdown the server.\n')
});

/********** API **********/
const Project = require('./models').Project;

router.get('/', (req, res) => {
    res.send('api works');
});

router.post('/new', (req, res) => {
    const project = new Project({
        description: req.body.text,
        link: req.body.link,
        title: req.body.title,
        lightDescription: req.body.description,
    });
    db.collection('projects').save(project,
        function(err, docs) {
            if (err) {
                res.status(401).send(err.message);
            } else {
                console.log("success");
                res.status(200).json(docs);
            }
        }
    );
});

router.get('/see', (req, res) => {
    Project.find(function (err, projects) {
        if(err) return console.error(err);
        console.log(projects);
    })
});