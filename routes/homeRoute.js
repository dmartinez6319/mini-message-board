import { Router } from "express";

const homeRouter = Router()
import {addMessage,getMessageInfo,getPageInfo} from "../controller/messageController.js"

// Client requests to see homepage
homeRouter.get("/",getPageInfo)

// Client requests to create message
homeRouter.post("/", addMessage)

// Client requests to see message info
homeRouter.get("/:messageId",getMessageInfo)

export default homeRouter