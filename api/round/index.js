const express = require('express');
const Round = require('./round.model');
const BaseController = require('../base/base.controller');
const processQuery = require('../../components/middlewares/process-query');

const controller = new BaseController(Round, 'round_id');

const router = new express.Router({ mergeParams: true });
const roomRouter = require('../room');

router.use('/:round_id/rooms', roomRouter);

router.get('/', processQuery, controller.index.bind(controller));
router.get('/:round_id', controller.show.bind(controller));
router.post('/', controller.create.bind(controller));
router.put('/:round_id', controller.update.bind(controller));
router.patch('/:round_id', controller.update.bind(controller));
router.delete('/:round_id', controller.destroy.bind(controller));

module.exports = router;

