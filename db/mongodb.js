const mongoose = require('mongoose')

const url = 'mongodb+srv://Felipe:AFXGyjuB3gHYhqCv@cluster0.dqmzgt2.mongodb.net/Library?retryWrites=true&w=majority'

mongoose.connect(url, {}, () => {
  console.log('----------------------')
  console.log('Conexión a la base de datos exitosa')
  console.log('----------------------')
})

module.exports = mongoose