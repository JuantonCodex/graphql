'use strict'

// Agregamos data temporal estática
const courses = [
  {
    _id: '00001',
    title: 'Google Tag Manager Básico',
    teacher: 'Juan Cahuana',
    description: 'Curso de iniciación en Google Tag Manager',
    topic: 'Marketing'
  },
  {
    _id: '00001',
    title: 'Google Tag Manager Avanzado I',
    teacher: 'Juan Cahuana',
    description: 'Curso de Google Tag Manager Avanzando; eventos personalizados, etiquetado usando variables, modo debug',
    topic: 'Marketing'
  },
  {
    _id: '00002',
    title: 'VTEX IO',
    teacher: 'Juan Cahuana',
    description: 'Curso de desarrollo FrontEnd con VTEX IO',
    topic: 'Programación'
  }
]


module.exports = {
  hello: () => {
    return 'Mensaje de saludo'
  },
  goodbye: (params) => {
    return 'Mensaje de despedida'
  },
  getCourses: () => {
    return courses
  }
}