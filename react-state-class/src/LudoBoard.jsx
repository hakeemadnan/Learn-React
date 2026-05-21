import { useState } from "react";

export default function LudoBoard() {
  let [moves, SetMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });
  let [arr,SetArr] = useState(["no moves"]);

  let updateblue = () =>{
    SetMoves((prevMoves) =>{
        return {...prevMoves,blue: prevMoves.blue+1}
    });
    SetArr((prevArr) => {return [...prevArr,"blue moves"]});
    console.log(arr);
  }
  let updateYellow = () =>{
    SetMoves((prevMoves) =>{
        return {...prevMoves,yellow: prevMoves.yellow+1}
    });
    SetArr((prevArr) => {return [...prevArr,"yellow moves"]});
    console.log(arr);
  };
  let updateGreen = () =>{
    SetMoves((prevMoves) =>{
        return {...prevMoves,green: prevMoves.green+1}
    });
    SetArr((prevArr) => {return [...prevArr,"green moves"]});
    console.log(arr);
  }

  let updatered = () =>{
    SetMoves((prevMoves) =>{
        return {...prevMoves,red: prevMoves.red+1}
    });
    SetArr((prevArr) => {return [...prevArr,"red moves"]});
    console.log(arr);
  }
  return (
    <div>
      <p>Game Begins</p>
      <p>{arr}</p>
      <div className="board">
        <p>Blue moves = {moves.blue}</p>
        <button onClick={updateblue} style={{ backgroundColor: "blue" }}>+1</button>
        <p>Green moves ={moves.green} </p>
        <button onClick={updateGreen} style={{ backgroundColor: "green" }}>+1</button>
        <p>Yellow moves = {moves.yellow}</p>
        <button onClick={updateYellow} style={{ backgroundColor: "yellow", color: "black" }}>
          +1
        </button>
        <p>Red moves ={moves.red} </p>
        <button onClick={updatered} style={{ backgroundColor: "red" }}>+1</button>
      </div>
    </div>
  );
}
