/**
 * Created by martinlunde on 26.09.2017.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    _id: { type: String },
    title: { type: String, default: "martinlunde.no"},
    link: { type: String, default: "/"},
    lightDescription: { type: String, default: "This is a higlight description"},
    description: { type: String, default: "none" },
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports.Project = Project;