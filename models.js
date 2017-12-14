/**
 * Created by martinlunde on 26.09.2017.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    _id: { type: String },
    title: { type: String, default: "N/A"},
    link: { type: String, default: "/"},
    lightDescription: { type: String, default: "N/A"},
    description: { type: String, default: "N/A" },
    assets: { type: Array, default: []},
    image: { type: String, default: 'blockbuster'},
    languages: { type: Object, default: {'default': 10}}
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports.Project = Project;