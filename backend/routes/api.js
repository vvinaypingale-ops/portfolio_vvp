const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const projectController = require('../controllers/projectController');
const messageController = require('../controllers/messageController');

// Project Routes
router.get('/projects', projectController.getProjects);
router.post('/projects', projectController.createProject);

// Contact Message Routes
router.post(
  '/contact',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('message', 'Message is required').not().isEmpty(),
  ],
  messageController.submitContactForm
);
router.get('/messages', messageController.getMessages);

module.exports = router;
