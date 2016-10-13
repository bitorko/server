const Model = require('objection').Model;
const schema = require('./round.schema.json');
const path = require('path');

class Round extends Model {
  static get tableName() {
    return 'round';
  }

  static get jsonSchema() {
    return schema;
  }

  static get relationshipMappings() {
    return {
      rooms: {
        relation: Model.HasManyRelation,
        modelClass: path.normalize(`${__dirname}/../room/room.model`),
        join: {
          from: 'round.id',
          to: 'room.round_id',
        },
      },
    };
  }
}

module.exports = Round;
