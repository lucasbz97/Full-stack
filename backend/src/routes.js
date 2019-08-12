const express = require('express');
const devController = require('./controllers/devController');
const likeController = require('./controllers/likeController');
const dislikesController = require('./controllers/dislikesController');

const routes = express.Router();

routes.get('/dev',devController.index);
routes.post('/dev',devController.store);

routes.post('/dev/:devId/likes', likeController.store);
routes.post('/dev/:devId/dislikes', dislikesController.store);

module.exports = routes;