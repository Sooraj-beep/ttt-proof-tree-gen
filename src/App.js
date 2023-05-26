import { Box, Button, Container } from "@mui/material";
import Test from "./components/Test";
import minimax from "./utils/minimax";
import Board from "./components/Board";
import { useState } from "react";
import ProofTree from "./components/ProofTree";

function App() {
  const [boardState, setBoardState] = useState([Array(9).fill(" ")]);
  const [player, setPlayer] = useState("X");

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
        <Button variant="contained" margin="normal" color="success">Generate Proof Tree</Button>
      </Box>
      <ProofTree></ProofTree>
    </div>
  );
}

export default App;
