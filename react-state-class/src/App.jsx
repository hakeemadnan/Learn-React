import './App.css'
import Counter from './Counter'
import LikeButton from './LikeButton'
import Lottery from './Lottery'
import LudoBoard from "./LudoBoard"
import Ticket from './Ticket'
import TodoList from './TodoList'
import {sum} from "./helper"
function App() {
  let winCond = (ticket) =>{
    // return sum(ticket) === 15;
    // return  ticket.every((num) => num ===ticket[0]);
    return ticket[0]=== 0;
  }
  return(
    <>
      <Lottery n ={3} winCond={winCond}/>
   </>
    
  )
}

export default App
