function up(knex, Promise) {
  return Promise.all([
    knex.raw('ALTER TABLE tournament ADD CONSTRAINT round_limit CHECK (total_rounds > 0 AND total_rounds < 9)'),
    knex.raw('ALTER TABLE round ADD CONSTRAINT round_limit CHECK (number > 0 AND number < 9)'),
    knex.raw('ALTER TABLE room_team ADD CONSTRAINT point_limit CHECK (points >= 0 AND points <= 3)'),
    knex.raw('ALTER TABLE room_team_debater ADD CONSTRAINT score_limit CHECK (score >= 0 AND score <= 100)'),
  ]);
}

function down(knex, Promise) {
  return Promise.all([
    knex.raw('ALTER TABLE tournament DROP CONSTRAINT round_limit'),
    knex.raw('ALTER TABLE round DROP CONSTRAINT round_limit'),
    knex.raw('ALTER TABLE room_team DROP CONSTRAINT point_limit'),
    knex.raw('ALTER TABLE room_team_debater DROP CONSTRAINT score_limit'),
  ]);
}

module.exports = { up, down };
