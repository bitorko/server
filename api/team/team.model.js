const Model = require('objection').Model;
const schema = require('./team.schema.json');

class Team extends Model {
  static get tableName() {
    return 'team';
  }

  static get jsonSchema() {
    return schema;
  }
}

module.exports = Team;

