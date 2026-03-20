
import React, {useState, useEffect} from "react"
import axios from "axios"

export default function App(){
 const [tickets,setTickets]=useState([])
 const [title,setTitle]=useState("")

 async function load(){
  const res=await axios.get("http://localhost:4000/tickets")
  setTickets(res.data)
 }

 async function createTicket(){
  await axios.post("http://localhost:4000/tickets",{title})
  setTitle("")
  load()
 }

 useEffect(()=>{load()},[])

 return (
  <div style={{padding:20}}>
   <h1>Ticket Dashboard</h1>

   <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Ticket title"/>
   <button onClick={createTicket}>Create</button>

   <ul>
    {tickets.map(t=>(
     <li key={t.id}>
      {t.title} - {t.status}
     </li>
    ))}
   </ul>
  </div>
 )
}
