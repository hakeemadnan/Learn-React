import { useState } from "react";
import "./lottery.css"
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";
import Button from "./button";

export default function Lottery({n=3,winCond}) {
  let [ticket, setTicket] = useState(genTicket(n));
  let isWinnning = winCond(ticket)
let buyTicket = () =>{
    setTicket(genTicket(n));
}
  return (
    <div>
      <h1>Lottery Game!</h1>
      <Ticket ticket={ticket}/>
      <br />
      <Button action= {buyTicket}/>
      <h3>{isWinnning && "Congratulations, you won"}</h3>
    </div>
  );
}
