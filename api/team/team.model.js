const Model = require('objection').Model;
const schema = require('./team.schema.json');
const path = require('path');

class Team extends Model {
  static get tableName() {
    return 'team';
  }

  static get jsonSchema() {
    return schema;
  }

  static get relationshipMappings() {
    return {
      members: {
        relation: Model.ManyToManyRelation,
        modelClass: path.normalize(`${__dirname}/../person/person.model`),
        join: {
          from: 'team.id',
          through: {
            from: 'team_member.team_id',
            to: 'team_member.member_id',
            extra: ['role', 'points'],
          },
          to: 'person.id',
        },
      },
    };
  }
}

module.exports = Team;

