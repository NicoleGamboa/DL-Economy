const fs = require('fs')

const argumento = process.argv.slice(2)
const nombre_archivo = argumento [0]
const extension = argumento [1]
const indicador_economico = argumento [2]
const cantidad_peso = argumento [3]


const https = require("https"); 
const url = "https://mindicador.cl/api"; 
 
https 
    .get(url, (resp) => { 
        let data = ""; 
 
        resp.on("data", (chunk) => { 
            data += chunk; 
        }); 
 
        resp.on("end", () => { 
            const consulta = JSON.parse(data)
            const texto = `
            Hola! Los indicadores economicos de hoy son los siguientes :
        
            El valor del dolor el dia de hoy es :
            El valor del euro el dia de hoy es :
            El valor del uf el dia de hoy es :
            El valor deel utm el dia de hoy es:
            `
            
            fs.writeFile(`${nombre_archivo}.${extension}`,texto ,'utf-8' , () => {
                fs.readFile(`${nombre_archivo}.${extension}` , 'utf-8' ,(err,data)=>{
                    if(err) {
                        console.log('error: ', err);
                      } else {
                        console.log(data);
                      }
                })
            }) 
        }); 
    }) 
    .on("error", (err) => console.error(err.message));