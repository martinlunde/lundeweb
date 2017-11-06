/**
 * Created by martinlunde on 26.09.2017.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    _id: { type: String },
    description: { type: String, default: "none" },
    link: { type: String, default: "/"},
    title: { type: String, default: "martinlunde.no"},
    lightDescription: { type: String, default: "This is a higlight description"},
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports.Project = Project;