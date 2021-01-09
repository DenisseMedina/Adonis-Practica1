'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class VerificarEdad {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({response, request }, next) {
    const años = request.input('edad')

    if(años<=15){
      return response.status(400).send("No cuentas con edad suficiente")
    }
    await next()
  }
}

module.exports = VerificarEdad
