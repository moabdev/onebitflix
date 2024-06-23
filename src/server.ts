import express from 'express'
import { database } from './database'
import { adminJs, adminJsRouter } from './adminjs'

const app = express()

app.use(express.static('public'))
//app.use(caminho, rotas)
app.use(adminJs.options.rootPath, adminJsRouter)

const PORT = process.env.port || 3000

app.listen(PORT, async () => {
  try {
    await database.authenticate()
    console.log('Conexão com o banco de dados bem-sucedida.')
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error)
  }

  console.log(`Servidor iniciado com sucesso na porta ${PORT}.`),
  console.log('http://localhost:3000/admin')
  
})

