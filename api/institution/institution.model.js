const Model = require('../base/base.model');
const schema = require('./institution.schema.json');
const path = require('path');

class Institution extends Model {
  static get tableName() {
    return 'institution';
  }

  static get jsonSchema() {
    return schema;
  }

  static get relationMappings() {
    return {
      people: {
        relation: Model.HasManyRelation,
        modelClass: path.normalize(`${__dirname}/../person/person.model`),
        join: {
          from: 'institution.id',
          to: 'person.institution_id',
        },
      },
    };
  }
}

module.exports = Institution;

