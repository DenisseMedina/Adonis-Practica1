'use strict'

const { validate } = use('Validator')
const Model = use('App/Models/Gente')

class GenteController {
async persona({request, response}){
  const {nombre,apellidoM,apellidoP,edad,sexo} = request.all()
  const recuperar = new Model()

  const rules = {
      nombre: 'required|min:4',
      //sexo:'required|Masculino|Femenino'
  }

  const val = await validate(request.all(), rules)

  if(val.fails()){
    return response.status(400).send("Error.")
  }

  recuperar.fill({nombre,apellidoM,apellidoP,edad,sexo})

  await recuperar.save()
  return response.status(200).send(recuperar)

}

async buscarPersona({response}){
  const consulta = await Model.all()
  return response.status(200).send(consulta)
}

async modificarNombre({request, response}){
  const ide = request.input('id')
  const name = request.input('nombre')

  const modificar = await Model.find(ide)
  modificar.nombre = name

  await modificar.save()
  return response.status(200).send(modificar)
}

async eliminarPersona({request, response}){
  const id = request.input('id')
  const eliminar = await Model.find(id)

  eliminar.delete()
  return response.status(200).send("Eliminado")
}
}
module.exports = GenteController
