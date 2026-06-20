# mini-message-board
TOP educational project - Nodejs

A mini messaging board where users can write short messages to be publically displayed alongside other messages. These messages contain the user's name and an option to view more information in detail such as date posted and messageId.

---

## Tech Stack
- **Runtime** - NodeJs
- **Templating** - EJS
- **Styling** - Tailwind CSS
- **Framework** - ExpressJs

---

## Project Structure
- public/ #Styling/Images/Assests
    - index.css
    - message.css
    - message-detail.css
- routes/ #routes to direct incoming requests
- controller/ #methods used to handle requests
- model/ #data containing messages
    - messages.js
- views/ #
    -index.ejs
    -message.ejs
    -message.detail.ejs
- app.js/ #backend logic

---

## Getting Started
**1. Install Dependencies**
```bash
npm i
```

**2. Start the server**
```bash
npm start 
```

**3. Open the port in the browser**
```
http://localhost:3000
```

---

## Routes

| Method | Path                  | Description                                |
| ------ | --------------------- | ------------------------------------------ |
| `GET`  | `/`                   | Renders the message feed                   |
| `POST` | `/new`                | Submits a new message from the dialog form |
| `GET` | `/message/:messageId`  | Opens the detail view for a single message |


