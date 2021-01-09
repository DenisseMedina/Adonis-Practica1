'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
// const Factory = use('Factory')

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })

const Factory = use('Factory')
const Hash = use('Hash')
//const Database = use('Database')

Factory.blueprint('App/Models/Gente', async (faker) => {
  return {
    nombre: faker.name(),
    apellidoM: faker.first(),
    apellidoP: faker.last(),
    edad: faker.age(10,40),
    sexo: faker.gender(),
  }
})
