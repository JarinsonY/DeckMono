require('dotenv').config() // requerir dotenv
const http = require('http') // requerir http
const next = require('next') // requerir next

// Leer la variable PORT del archivo .env o .env.local
const port = process.env.PORT || 3000

// Crear una instancia de la aplicación de NextJS en modo desarrollo
const app = next({ dev: true })

// Obtener el manejador de solicitudes
const handler = app.getRequestHandler()

// Preparar la aplicación
app.prepare().then(() => {
    // Crear un servidor HTTP
    const server = http.createServer(handler)

    // Escuchar el puerto especificado
    server.listen(port, () => {
        console.log(`Servidor corriendo en el puerto ${port}: http://localhost:${port}`)
    })
})