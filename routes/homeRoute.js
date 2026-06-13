import { Router } from "express";

const homeRouter = Router()

// Client requests to see homepage
homeRouter.get("/",(req,res) => {
    res.send("Nothing much")
})

// Client requests to create message
homeRouter.post("/", (req,res) => {
    res.send("New Message")
})

// Client requests to see message info
homeRouter.get("/:messageId",(req,res) => {
    res.send("Message info")
})

export default homeRouter