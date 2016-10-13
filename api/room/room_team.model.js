const Model = require('../base/base.model');
const path = require('path');

class RoomTeam extends Model {
  static get tableName() {
    return 'room_team';
  }

  static get relationMappings() {
    return {
      debaters: {
        relation: Model.HasManyRelation,
        modelClass: path.normalize(`${__dirname}/../room/room_team_debater.model`),
        join: {
          from: 'room_team.id',
          to: 'room_team_debater.room_team_id',
        },
      },
    };
  }
}

module.exports = RoomTeam;
