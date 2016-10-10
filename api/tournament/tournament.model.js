const Model = require('objection').Model;
const schema = require('./tournament.schema.json');

class Tournament extends Model {
  static get tableName() {
    return 'tournament';
  }

  static get jsonSchema() {
    return schema;
  }
}

module.exports = Tournament;
