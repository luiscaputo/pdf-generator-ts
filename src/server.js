const express = require('express')
const PDFkit = require('pdfkit')
const fs = require('fs')

const app = express()
app.use(express.json())

       app.get('/', (require, response) => {

        const pdf = new PDFkit
    
        return response.sendFile(
        pdf.text('Olá mundo!'),
        //pdf.pipe(fs.createWriteStream(output.pdf)),
        pdf.end(),
        pdf
        .fontSize('13')
        .fillColor('#6155a4')
        .text('Texto formatado', {
            align: 'center'
        })
        )

       })

app.listen(5555,() => {
    console.log('Esta a  rodar o projecto')
})

