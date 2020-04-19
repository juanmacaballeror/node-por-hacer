const descripcion = {
  demand: true,
  alias: 'd',
  desc: 'Descripción de tarea por hacer'
}

const completado = {
  alias: 'c',
  default: true,
  desc: 'Marca como completado o pendiente la tarea'
}


const argv = require('yargs')
  .command('listar', 'Leer data.json')
  .command('crear', 'crea una tarea', { descripcion })
  .command('actualizar', 'Actualiza una tarea', { descripcion, completado })
  .command('borrar', 'borra una tarea', { descripcion }).help().argv;


module.exports = {
  argv
}