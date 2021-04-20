import express from "express"

const app = express();

app.use(express.json())

app.get("/", (request, response) =>{
    return response.json({
        message: "primeira rota!"
    })
})

app.post("/", (resquest, response) =>{
    
    response.json({
        message: "usuario"
    })

    console.log("Usuarios",resquest.body)
})

app.listen(3333, () => {
    console.log(`Servidor no endereço http://localhost:3333`);
});