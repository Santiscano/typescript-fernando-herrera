import express from 'express';


const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.status(200).json({
        ok: true,
        msg: "todo ok"
    })
})

app.listen(port, ()=>console.log(`escuchando en el puerto${port}`))