const Model = require('../base/base.model');
const schema = require('./institution.schema.json');

class Institution extends Model {
  static get tableName() {
    return 'institution';
  }

  static get jsonSchema() {
    return schema;
  }

}

module.exports = Institution;

