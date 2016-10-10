function up(knex) {
  return knex.schema
    .createTable('institution', (table) => {
      table.increments('id').primary();
      table.string('name');
    })
    .createTable('person', (table) => {
      table.increments('id').primary();
      table.integer('institution_id').unsigned().references('id').inTable('institution');
      table.string('name');
    })
    .createTable('motion_type', (table) => {
      table.increments('id').primary();
      table.string('name');
    })
    .createTable('round', (table) => {
      table.increments('id').primary();
      table.integer('tournament_id').unsigned().references('id').inTable('tournament');
      table.integer('motion_type_id').unsigned().references('id').inTable('motion_type');
      table.integer('number');
      table.integer('teams');
      table.integer('adjudicators');
      table.string('motion');
      table.text('context');
    })
    .createTable('tournament', (table) => {
      table.increments('id').primary();
      table.integer('host_id').unsigned().references('id').inTable('institution');
      table.string('name');
      table.text('description');
      table.string('poster');
      table.integer('rounds');
      table.date('start_date');
      table.date('end_date');
    })
    .createTable('room', (table) => {
      table.increments('id').primary();
      table.integer('round_id').unsigned().references('id').inTable('round');
      table.string('name');
    })
    .createTable('team', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.integer('tournament_id').unsigned().references('id').inTable('tournament');
      table.integer('institution_id').unsigned().references('id').inTable('institution');
      table.specificType('position', 'integer[]');
      table.string('name');
      table.boolean('swing');
      table.boolean('active');
    })
    .createTable('user', (table) => {
      table.increments('id').primary();
      table.integer('person_id').unsigned().references('id').inTable('person');
      table.string('email');
      table.string('facebook');
      table.string('hash');
      table.string('name');
      table.string('phone');
    })
    .createTable('tournament_adjudicator', (table) => {
      table.increments('id').primary();
      table.integer('tournament_id').unsigned().references('id').inTable('tournament');
      table.integer('person_id').unsigned().references('id').inTable('person');
      table.string('name');
    })
    .createTable('team_member', (table) => {
      table.increments('id').primary();
      table.integer('team_id').unsigned().references('id').inTable('team');
      table.integer('person_id').unsigned().references('id').inTable('person');
    })
    .createTable('room_adjudicator', (table) => {
      table.increments('id').primary();
      table.integer('round_id').unsigned().references('id').inTable('round');
      table.integer('person_id').unsigned().references('id').inTable('person');
      table.enu('role', ['chair', 'panelist', 'trainee']);
      table.integer('points');
    })
    .createTable('room_debater', (table) => {
      table.increments('id').primary();
      table.integer('room_id').unsigned().references('id').inTable('room');
      table.integer('person_id').unsigned().references('id').inTable('person');
      table.integer('points');
    })
    .createTable('person_institution', (table) => {
      table.increments('id').primary();
      table.integer('institution_id').unsigned().references('id').inTable('institution');
      table.integer('person_id').unsigned().references('id').inTable('person');
    })
    .createTable('room_team', (table) => {
      table.increments('id').primary();
      table.integer('room_id').unsigned().references('id').inTable('room');
      table.integer('team_id').unsigned().references('id').inTable('team');
      table.integer('points');
      table.enu('role', ['og', 'oo', 'co', 'cg']);
    });
}

function down(knex) {
  return knex.schema
    .dropTableIfExists('room_team')
    .dropTableIfExists('person_institution')
    .dropTableIfExists('room_debater')
    .dropTableIfExists('room_adjudicator')
    .dropTableIfExists('team_member')
    .dropTableIfExists('user')
    .dropTableIfExists('team')
    .dropTableIfExists('room')
    .dropTableIfExists('tournament')
    .dropTableIfExists('round')
    .dropTableIfExists('motion_type')
    .dropTableIfExists('person')
    .dropTableIfExists('institution');
}

module.exports = { up, down };
