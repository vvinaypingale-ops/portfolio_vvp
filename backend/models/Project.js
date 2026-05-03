const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  technologies: {
    type: [String],
    required: true,
  },
  githubLink: {
    type: String,
  },
  liveLink: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  featured: {
    type: Boolean,
    default: false,
  }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
