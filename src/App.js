import { Box, Button, Container } from "@mui/material";
import Test from "./components/Test";
import minimax from "./utils/minimax";
import Board from "./components/Board";
import { useState } from "react";
import ProofTree from "./components/ProofTree";
import GenerateProofTree from "./utils/GenerateProofTree";

function App() {
  const [boardState, setBoardState] = useState([Array(9).fill("")]);
  const [player, setPlayer] = useState("X");
  const [graphData, setGraphData] = useState(null);

  // const result = minimax(board, player);
  // console.log("Best move:", result.move);
  // console.log("Board score:", result.score);
  return (
    <div>
      <Box
        display="flex"
        flexDirection={"column"}
        maxWidth={400}
        alignItems={"center"}
        justifyContent={"center"}
        margin={"auto"}
        marginTop={10}
        padding={2}
        borderRadius={5}
        boxShadow={'5px 5px 10px #ccc'}
      >
        <Board boardState={boardState} player={player} setBoardState={setBoardState} setPlayer={setPlayer}></Board>
        <Button variant="contained" margin="normal" color="success"
          onClick={() => { 
            // convert boardState to 2d array
            // ex: [X, O, X, O, X, O, X, O, X] -> [[X, O, X], [O, X, O], [X, O, X]]
            const boardMatrix = boardState[0].reduce((rows, key, index) => (index % 3 === 0 ? rows.push([key]) : rows[rows.length-1].push(key)) && rows, []);
            setGraphData(GenerateProofTree(boardMatrix, 'X', 'O'));
            console.log("boardMatrix ", graphData);
  
          }}
        >Generate Proof Tree</Button>
      </Box>
        {
          graphData && <ProofTree graphData={graphData}></ProofTree>
        }
    </div>
  );
}

export default App;
