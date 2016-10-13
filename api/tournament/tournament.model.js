const Model = require('objection').Model;
const schema = require('./tournament.schema.json');
const path = require('path');

class Tournament extends Model {
  static get tableName() {
    return 'tournament';
  }

  static get jsonSchema() {
    return schema;
  }

  static get relationshipMappings() {
    return {
      rounds: {
        relation: Model.ManyToManyRelation,
        modelClass: path.normalize(`${__dirname}/../round/round.model`),
        join: {
          from: 'tournament.id',
          to: 'round.tournament_id',
        },
      },
      teams: {
        relation: Model.ManyToManyRelation,
        modelClass: path.normalize(`${__dirname}/../team/team.model`),
        join: {
          from: 'tournament.id',
          to: 'team.tournament_id',
        },
      },
      adjudicators: {
        relation: Model.ManyToManyRelation,
        modelClass: path.normalize(`${__dirname}/../person/person.model`),
        join: {
          from: 'tournament.id',
          through: {
            from: 'tournament_adjudicator.tournament_id',
            to: 'tournament_adjudicator.adjudicator_id',
            extra: ['can_chair', 'active'],
          },
          to: 'person.id',
        },
      },
    };
  }
}

module.exports = Tournament;
