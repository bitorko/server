const Model = require('../base/base.model');
const schema = require('./room.schema.json');

class Room extends Model {
  static get tableName() {
    return 'room';
  }

  static get jsonSchema() {
    return schema;
  }

}

module.exports = Room;
