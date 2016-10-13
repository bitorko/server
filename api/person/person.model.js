const path = require('path');
const Model = require('objection').Model;
const schema = require('./person.schema.json');

class Person extends Model {
  static get tableName() {
    return 'person';
  }

  static get jsonSchema() {
    return schema;
  }

  static get relationMappings() {
    return {
      team: {
        relation: Model.ManyToManyRelation,
        modelClass: path.normalize(`${__dirname}/../team/team.model`),
        join: {
          from: 'person.id',
          through: {
            from: 'team_member.person_id',
            to: 'team_member.team_id',
          },
          to: 'team.id',
        },
      },
    };
  }
}

module.exports = Person;
