require('dotenv').config();
const jsf = require('json-schema-faker');
const _ = require('lodash');

const institutionSchema = require('../api/institution/institution.schema.json');
const personSchema = require('../api/person/person.schema.json');
const typeSchema = require('../api/motion-type/motion-type.schema.json');
const tournamentSchema = require('../api/tournament/tournament.schema.json');
const roundSchema = require('../api/round/round.schema.json');
const roomSchema = require('../api/room/room.schema.json');
const teamSchema = require('../api/team/team.schema.json');
const userSchema = require('../api/user/user.schema.json');


function getRecords(count, schema) {
  return _.times(count, jsf.bind(void 0, schema));
}

// TODO: Prompt user before clearing out schemas
// Delete ManyToMany and OneToMany tables automatically
function truncate(knex, Promise, tables) {
  return Promise.each(tables,
      (table) => knex.raw(`TRUNCATE TABLE ${table} RESTART IDENTITY CASCADE`));
}

const tables = [
  'room_team',
  'person_institution',
  'room_team_member',
  'room_adjudicator',
  'team_member',
  'user',
  'team',
  'room',
  'round',
  'tournament',
  'motion_type',
  'person',
  'institution',
];

exports.seed = function (knex, Promise) {
  const numberOfRecords = 10;
  return truncate(knex, Promise, tables)
    .then(() => Promise.all([
      knex('institution').insert(getRecords(numberOfRecords, institutionSchema)),
      knex('motion_type').insert(getRecords(numberOfRecords, typeSchema)),
    ]))
    .then(() => Promise.all([
      knex('person').insert(getRecords(numberOfRecords, personSchema)),
    ]))
    .then(() => Promise.all([
      knex('tournament').insert(getRecords(numberOfRecords, tournamentSchema)),
      knex('user').insert(getRecords(numberOfRecords, userSchema)),
    ]))
    .then(() => Promise.all([
      knex('round').insert(getRecords(numberOfRecords, roundSchema)),
      knex('team').insert(getRecords(numberOfRecords, teamSchema)),
    ]))
    .then(() => Promise.all([
      knex('room').insert(getRecords(numberOfRecords, roomSchema)),
    ]));
};

