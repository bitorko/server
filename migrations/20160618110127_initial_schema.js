function up(knex) {
  return knex.schema
    .createTable('institution', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('country_code').defaultTo('bd');
    })
    .createTable('person', (table) => {
      table.increments('id').primary();
      table.integer('institution_id').unsigned().references('id').inTable('institution');
      table.string('name').notNullable();
    })
    .createTable('motion_type', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
    })
    .createTable('tournament', (table) => {
      table.increments('id').primary();
      table.integer('host_id').unsigned().references('id').inTable('institution').notNullable();
      table.string('name').notNullable();
      table.text('description');
      table.string('poster');
      table.integer('rounds').notNullable();
      table.date('start_date');
      table.date('end_date');
    })
    .createTable('round', (table) => {
      table.increments('id').primary();
      table.integer('tournament_id').unsigned().references('id').inTable('tournament');
      table.integer('motion_type_id').unsigned().references('id').inTable('motion_type');
      table.integer('number').notNullable();
      table.integer('team_count');
      table.integer('adj_count');
      table.string('motion').notNullable();
      table.text('context');
    })
    .createTable('room', (table) => {
      table.increments('id').primary();
      table.integer('round_id').unsigned().references('id').inTable('round');
      table.string('name');
    })
    .createTable('team', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.integer('tournament_id').unsigned().references('id').inTable('tournament');
      table.integer('institution_id').unsigned().references('id').inTable('institution');
      table.specificType('position', 'integer[]');
      table.boolean('swing').defaultTo(false);
      table.boolean('active').defaultTo(true);
    })
    .createTable('user', (table) => {
      table.increments('id').primary();
      table.integer('person_id').unsigned().references('id').inTable('person');
      table.string('email').notNullable().unique();
      table.string('facebook');
      table.string('hash');
      table.string('name');
      table.string('phone');
    })
    .createTable('tournament_adjudicator', (table) => {
      table.increments('id').primary();
      table.integer('tournament_id').unsigned().references('id').inTable('tournament');
      table.integer('adjudicator_id').unsigned().references('id').inTable('person');
      table.boolean('can_chair');
      table.boolean('active').defaultTo(true);
    })
    .createTable('team_member', (table) => {
      table.increments('id').primary();
      table.integer('team_id').unsigned().references('id').inTable('team');
      table.integer('member_id').unsigned().references('id').inTable('person');
    })
    .createTable('room_adjudicator', (table) => {
      table.increments('id').primary();
      table.integer('room_id').unsigned().references('id').inTable('room');
      table.integer('adjudicator_id').unsigned().references('id').inTable('person');
      table.enu('role', ['chair', 'panelist', 'trainee']);
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
    })
    .createTable('room_team_debater', (table) => {
      table.increments('id').primary();
      table.integer('room_team_id').unsigned().references('id').inTable('room_team');
      table.integer('debater_id').unsigned().references('id').inTable('person');
      table.integer('score');
      table.integer('speech_order');
    });
}

function down(knex) {
  return knex.schema
    .dropTableIfExists('room_team')
    .dropTableIfExists('person_institution')
    .dropTableIfExists('room_team_member')
    .dropTableIfExists('room_adjudicator')
    .dropTableIfExists('team_member')
    .dropTableIfExists('tournament_adjudicator')
    .dropTableIfExists('user')
    .dropTableIfExists('team')
    .dropTableIfExists('room')
    .dropTableIfExists('round')
    .dropTableIfExists('tournament')
    .dropTableIfExists('motion_type')
    .dropTableIfExists('person')
    .dropTableIfExists('institution');
}

module.exports = { up, down };
