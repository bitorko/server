const Model = require('../base/base.model');
const schema = require('./room.schema.json');
const path = require('path');

class Room extends Model {
  static get tableName() {
    return 'room';
  }

  static get jsonSchema() {
    return schema;
  }

  static get relationshipMappings() {
    return {
      teams: {
        relation: Model.ManyToManyRelation,
        modelClass: path.normalize(`${__dirname}/../team/team.model`),
        join: {
          from: 'room.id',
          through: {
            from: 'room_team.room_id',
            to: 'room_team.team_id',
            extra: ['role', 'points'],
          },
          to: 'team.id',
        },
      },
      adjudicators: {
        relation: Model.ManyToManyRelation,
        modelClass: path.normalize(`${__dirname}/../person/person.model`),
        join: {
          from: 'room.id',
          through: {
            from: 'room_adjudicator.room_id',
            to: 'room_adjudicator.adjudicator_id',
            extra: ['role', 'points'],
          },
          to: 'person.id',
        },
      },
    };
  }
}

module.exports = Room;
