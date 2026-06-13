import express from "express"
import path from "path"
import { fileURLToPath } from "url";

// creating dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const port = process.env.PORT || 3000

import homeRouter from "./routes/homeRoute.js"

// Receive form input info from requests
app.use(express.urlencoded({extended : true}))

// Set EJS as template engine
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")

// Routers
app.use("/",homeRouter)

// Error Handler
app.use((err,req,res,next) => {

    res.status(404).send("404 error")

})

// Server Startup
app.listen(port,(err) => {

    if (err) {throw(err)}

    console.log("Server listening")
})