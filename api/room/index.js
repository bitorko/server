const express = require('express');
const Room = require('./room.model');
const BaseController = require('../base/base.controller');
const processQuery = require('../../components/middlewares/process-query');
const roomTeamRouter = require('./room_team.js');

const controller = new BaseController(Room, 'room_id');

const router = new express.Router({ mergeParams: true });
router.use('/:room_id/teams', roomTeamRouter);

router.get('/', processQuery, controller.index.bind(controller));
router.get('/:room_id', controller.show.bind(controller));
router.post('/', controller.create.bind(controller));
router.put('/:room_id', controller.update.bind(controller));
router.patch('/:room_id', controller.update.bind(controller));
router.delete('/:room_id', controller.destroy.bind(controller));

module.exports = router;

