// Steps for creating the server
// 1) Importing the JSON server


const jsonServer = require ('json-server')

// 2) Create json server 

const todoServer = jsonServer.create()

// 3) create a connection to db.json. It uses a method named router

const router = jsonServer.router('db.json')


// 4) Create a middleware
const middleWare = jsonServer.defaults();

// 5) use this middleware
todoServer.use(middleWare)
todoServer.use(router)

const port = 5000

todoServer.listen(port,()=>{

    console.log(`Server is responding and running in port ${port}`)

})