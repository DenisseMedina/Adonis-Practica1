'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(()=>{
  Route.post('registro/persona', 'GenteController.persona').validator('Validador').middleware(['VerificarEdad'])
  Route.get('buscar/persona', 'GenteController.buscarPersona')
  Route.put('modificar/nombre', 'GenteController.modificarNombre')
  Route.delete('eliminar/persona', 'GenteController.eliminarPersona')

}).prefix('api/');

