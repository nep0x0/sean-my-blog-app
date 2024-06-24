const express = require("express")

const app = express()
const PORT = 3211 || process.env.PORT

app.get('/', (request, response) => {
    console.log("Api utama di akses")
    response.send("ini adalah route utama")
})

app.listen(PORT, () => {
    console.log("Server running on port ", PORT)
})