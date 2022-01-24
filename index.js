const http = require ('http');
const {enviar} = require ('./email')
const url = require ('url')
const fs = require ('fs')

const server = http.createServer (async (req, res)=>{

    if(req.url.includes("/mailing")){

        const {correos, asunto, contenido} = url.parse(req.url, true).query

        try {
            const respuesta = await enviar ( correos.split(","), asunto, contenido)
            if(!respuesta.ok) return res.end (respuesta.msg)
            return res.end(respuesta.msg)
            
        } catch (error) {
            console.log ('error al enviar correo', error)
            return res.end ('fallo el servidor')
            
        }
        
    }

    if(req.url === '/formulario'){
        
        return fs.readFile('index.html', (err, html)=> {
            if(err) return res.end ('falla en leer html')
            res.writeHead(200, {"Content-Type": "text/html" })
            res.end (html)
        })

    }

})

server.listen (3000, ()=> console.log ("servidor corriendo"));
