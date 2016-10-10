[![Dependency Status](https://david-dm.org/bitorko/server.svg)](https://david-dm.org/bitorko/server)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](https://opensource.org/licenses/MIT)

Debate tournament tab software for Bitorko platform.

###How to Run:

 - Install [nvm](https://github.com/creationix/nvm) and then `nvm install node`.
 - Add `node_modules` to your path variable. For example, for `zsh`, add this to your `.zshrc`: `export PATH="$PATH:./node_modules/.bin"`
 - Install project dependencies: `npm install`
 - Install [PostgreSQL](https://www.postgresql.org/download/) and create a database.
 - Install [redis](http://redis.io)
 - Create an environment variable configuration file named `.env` in the project root and define the environment variables. Here's a [sample](https://gist.github.com/afm-sayem/b000849ffa2f38169c73d2c9bb165bc0).
 - Create tables: `knex migrate:latest`
 - Populate tables with data: `knex seed:run`
 - Run the server: `npm run dev`
 - Test the API: http://localhost:3000/movies
