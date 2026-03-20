
const express=require("express")
const cors=require("cors")
const http=require("http")
const {Server}=require("socket.io")

const ticketRoutes=require("./routes/tickets")

const app=express()
app.use(cors())
app.use(express.json())

app.use("/tickets",ticketRoutes)

const server=http.createServer(app)
const io=new Server(server,{cors:{origin:"*"}})

io.on("connection",socket=>{
 console.log("user connected")
})

server.listen(4000,()=>console.log("Server running on 4000"))
