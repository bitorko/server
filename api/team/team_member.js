const express = require('express');
const Team = require('./team.model');
const BaseController = require('../base/base.controller');
const processQuery = require('../../components/middlewares/process-query');

const controller = new BaseController(Team, 'team_id');

const router = new express.Router({ mergeParams: true });

router.get('/', processQuery, controller.index.bind(controller));
router.get('/:team_id', controller.show.bind(controller));
router.post('/', controller.create.bind(controller));
router.put('/:team_id', controller.update.bind(controller));
router.patch('/:team_id', controller.update.bind(controller));
router.delete('/:team_id', controller.destroy.bind(controller));

module.exports = router;
