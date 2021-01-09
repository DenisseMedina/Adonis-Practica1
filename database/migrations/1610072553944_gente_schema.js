'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GenteSchema extends Schema {
  up () {
    this.create('gentes', (table) => {
      table.increments()
      table.string('nombre', 20).notNullable()
      table.string('apellidoM', 20).notNullable()
      table.string('apellidoP', 20).notNullable()
      table.integer('edad').notNullable()
      table.string('sexo').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('gentes')
  }
}

module.exports = GenteSchema
