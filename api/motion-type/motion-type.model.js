const Model = require('objection').Model;
const schema = require('./motion-type.schema.json');

class MotionType extends Model {
  static get tableName() {
    return 'motion_type';
  }

  static get jsonSchema() {
    return schema;
  }

}

module.exports = MotionType;
