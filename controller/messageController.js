import messages from "../model/messages.js"

const addMessage = (req,res) => {

    const username = (typeof req.body.username === undefined || req.body.username === "") ? "Anonymous" : req.body.username

    const newMessage = {

        id: messages.length,
        text: req.body.userMessage,
        user: username,
        added: new Date()

    }

    messages.push(newMessage)

    console.log(newMessage)

    // encodeURIComponent keeps spaces and special characters safe in URLs.
    res.redirect(`/?username=${encodeURIComponent(req.body.username)}`)
}

const getMessageInfo = (req,res) => {

    const idParam = req.params.messageId
    const selectedMessage = messages.find( msg => msg.id == idParam)

    if (!selectedMessage) {
        return res.send("User does not exist! :(")
        
    }

    res.render("messageDetails", {
        username: selectedMessage.user,
        message: selectedMessage.text,
        date: selectedMessage.added,
        id: selectedMessage.id
    })

}

const getPageInfo = (req,res) => {

    const savedUsername = req.query.username || "Anonymous"

    res.render("index", {msgs : messages,username: savedUsername})
}

export {addMessage,getMessageInfo,getPageInfo}