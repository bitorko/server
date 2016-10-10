const hooks = require('hooks');
const assert = require('chai').assert;

hooks.before('GET /tournament -> 200', (test, done) => {
  done();
});

hooks.after('GET /tournament -> 200', (test, done) => {
  done();
});

//-----------------------------------------------------------------------------
hooks.before('POST /tournament -> 201', (test, done) => {
  done();
});

hooks.after('POST /tournament -> 201', (test, done) => {
  done();
});

//-----------------------------------------------------------------------------
hooks.before('GET /tournament/{movieId} -> 200', (test, done) => {
  test.request.params = {
    movieId: 1,
  };
  done();
});

hooks.after('GET /tournament/{movieId} -> 200', (test, done) => {
  done();
});

//-----------------------------------------------------------------------------
hooks.before('GET /tournament/{movieId}/artists -> 200', (test, done) => {
  test.request.params = {
    objectId: 1,
  };
  done();
});

hooks.after('GET /tournament/{movieId}/artists -> 200', (test, done) => {
  done();
});

//-----------------------------------------------------------------------------
hooks.before('POST /tournament/{movieId}/artists -> 201', (test, done) => {
  test.request.params = {
    movieId: 1,
  };
  done();
});

hooks.after('POST /tournament/{movieId}/artists -> 201', (test, done) => {
  done();
});

//-----------------------------------------------------------------------------
hooks.before('GET /tournament/{movieId}/artists/{artistId} -> 200', (test, done) => {
  test.request.params = {
    movieId: 1,
    artistId: 1,
  };
  done();
});

hooks.after('GET /tournament/{movieId}/artists/{artistId} -> 200', (test, done) => {
  done();
});

//-----------------------------------------------------------------------------
hooks.before('GET /tournament/{movieId}/reviews -> 200', (test, done) => {
  test.request.params = {
    movieId: 1,
  };
  done();
});

hooks.after('GET /tournament/{movieId}/reviews -> 200', (test, done) => {
  done();
});

//-----------------------------------------------------------------------------
hooks.before('POST /tournament/{movieId}/reviews -> 201', (test, done) => {
  test.request.params = {
    movieId: 1,
  };

  test.request.body = {
    title: 'Great movie!',
    movie_id: 1,
    recommended: true,
  };
  done();
});

hooks.after('POST /tournament/{movieId}/reviews -> 201', (test, done) => {
  done();
});

//-----------------------------------------------------------------------------
hooks.before('GET /tournament/{movieId}/reviews/{reviewId} -> 200', (test, done) => {
  test.request.params = {
    movieId: 1,
    reviewId: 1,
  };
  done();
});

hooks.after('GET /tournament/{movieId}/reviews/{reviewId} -> 200', (test, done) => {
  done();
});

