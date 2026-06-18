import messages from "../model/messages.js"

const addMessage = (req,res) => {

    const newMessage = {

        id: messages.length,
        text: req.body.userMessage,
        user: req.body.username,
        added: new Date()

    }

    messages.push(newMessage)

    console.log(newMessage)

    res.redirect("/")

}

const getMessageInfo = (req,res) => {

    const idParam = req.params.messageId
    const selectedMessage = messages.find( msg => msg.id == idParam)

    if (!selectedMessage) {
        res.send("User does not exist! :(")
    }

    res.render("messageDetails", {
        username: selectedMessage.user,
        message: selectedMessage.text,
        date: selectedMessage.added,
        id: selectedMessage.id
    })

}

const getPageInfo = (req,res) => {

    res.render("index", {msgs : messages})
}

export {addMessage,getMessageInfo,getPageInfo}