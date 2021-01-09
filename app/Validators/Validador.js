'use strict'

class Validador {
  get rules () {
    return {
      nombre: 'required|min:4',
      //sexo:'required|Masculino|Femenino'
    }
  }
}

module.exports = Validador
