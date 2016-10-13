const express = require('express');
const RoomDebater = require('./room_debater.model');
const BaseController = require('../base/base.controller');
const processQuery = require('../../components/middlewares/process-query');

const controller = new BaseController(RoomDebater, 'member_id');

const router = new express.Router({ mergeParams: true });

router.get('/', processQuery, controller.index.bind(controller));
router.get('/:member_id', controller.show.bind(controller));
router.post('/', controller.create.bind(controller));
router.put('/:member_id', controller.update.bind(controller));
router.patch('/:member_id', controller.update.bind(controller));
router.delete('/:member_id', controller.destroy.bind(controller));

module.exports = router;

