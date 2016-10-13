const Model = require('../base/base.model');
const path = require('path');

class RoomTeamDebater extends Model {
  static get tableName() {
    return 'room_team_debater';
  }

  static get relationshipMappings() {
    return {
      debater: {
        relation: Model.BelongsToOneRelation,
        modelClass: path.normalize(`${__dirname}/../person/person.model`),
        join: {
          from: 'room_team_debater.debater_id',
          to: 'person.id',
          extra: ['score', 'speech_order'],
        },
      },
    };
  }
}

module.exports = RoomTeamDebater;
