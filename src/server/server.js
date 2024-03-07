// Antes
// const express = require('express')
// const path = require('path')

// Despúes
import express from 'express'
import path from 'path'

export const startServer = (options) => {
    const { port, public_path = 'public' } = options
    const app = express()

    app.use(express.static(public_path)) // Contenido estatico
    app.get('*', (req, res) => {
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    })
    app.listen(port, () => {
        console.log(`Escuchando en el puerto ${port}`);
    })
}