const nodemailer = require ('nodemailer')

const enviar = async (to, subject, text) => {
    const transportador = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
        user: "77d438886ede27",
        pass: "f7af34c9248483"
        }
    })

    const opciones = {
        from: 'contato@soyelproveedor.cl',
        to,
        subject,
        html: text,
    }

    try {
        const info = await transportador.sendMail(opciones)
        return {ok:true, msg:'correo enviado'};
    } catch (error) {
        console.log(error)
        return { ok: false, msg:'correo no enviado'};
    }
};

module.exports ={
    enviar,
};