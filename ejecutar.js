const child_process = require("child_process");

child_process.exec("node consumir.js archivo txt uf 1000" , (err, result) => {
    if(err) console.log("fallo")
    console.log(result)
});