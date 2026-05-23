import TicketNum from "./TicketNum";
import "./ticket.css";
export default function Ticket({ ticket }) {
  return (
    <div className="Ticket">
      <p>Ticket</p>
      <br />
      {ticket.map((num, idx) => (
        <TicketNum num={num} key={idx} />
      ))}
    </div>
  );
}
