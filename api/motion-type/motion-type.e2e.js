const hooks = require('hooks');
const assert = require('chai').assert;

hooks.before('GET /motion_types -> 200', (test, done) => {
  done();
});

hooks.after('GET /motion_types -> 200', (test, done) => {
  done();
});

//-----------------------------------------------------------------------------
hooks.before('POST /motion_types -> 201', (test, done) => {
  done();
});

hooks.after('POST /motion_types -> 201', (test, done) => {
  done();
});

//-----------------------------------------------------------------------------
hooks.before('GET /motion_types/{typeId} -> 200', (test, done) => {
  test.request.params = {
    objectId: 1,
  };
  done();
});

hooks.after('GET /motion_types/{typeId} -> 200', (test, done) => {
  done();
});

