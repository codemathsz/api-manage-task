const http = require('http')
const { routes } = require('./routes/routes')
require('dotenv').config();
const pool = require('./db')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) =>{
  routes(req, res)
})

server.listen(port, hostname, ()=>{
  console.log(`server running at http://${hostname}:${port}`);
  pool.connect((err, client, done) => {
    if (err) {
      console.error('Erro ao conectar com `postgres`:', err);
    } else {
      console.log('Conexão com `postgres` bem-sucedida!');
      done(); // Libera o cliente
    }
  });
})