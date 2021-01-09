'use strict'

/*
|--------------------------------------------------------------------------
| GenteSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class GenteSeeder {
  async run () {
    //await Factory.model('App/Models/Person').create();
    const gente = await Factory.model('App/Models/Gente').createMany(10)
    await Database.table('gentes')
    console.log(gente)
    //await PersonSeeder.run();
  }
}

module.exports = GenteSeeder
