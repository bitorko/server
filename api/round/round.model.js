const Model = require('objection').Model;
const schema = require('./round.schema.json');

class Round extends Model {
  static get tableName() {
    return 'round';
  }

  static get jsonSchema() {
    return schema;
  }
}

module.exports = Round;
