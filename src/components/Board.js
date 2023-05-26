import React from "react";
import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/material";


const CustomPaper = styled(Paper)`
  padding: 10px;
  text-align: center;
  color: #000;
  cursor: pointer;
  min-height: 100px;
`;

function Tile({pos, boardState, player, setBoardState, setPlayer}) {
    return (
      <CustomPaper
        onClick={() => {
            console.log(boardState[0][pos]);
            if (boardState[0][pos] === " ") {
                console.log("clicked");
                const newBoardState = [...boardState];
                newBoardState[0][pos] = player[0];
                setBoardState(newBoardState);
                setPlayer(player === "X" ? "O" : "X");
            }
        }}
      >
        {boardState[0][pos]}
      </CustomPaper>
    );
    }
  

// import {makeStyles} from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     marginTop: theme.spacing(2),
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     cursor: 'pointer',
//   },
// }));

const Board = ({ boardState, player, setBoardState, setPlayer }) => {
  //   const classes = useStyles();
  return (
    <div>
      <Grid container spacing={2} padding={3}>
        <Grid item xs={4}>
          <Tile pos={0} boardState={boardState} player={player} setBoardState={setBoardState} setPlayer={setPlayer}></Tile>
        </Grid>
        <Grid item xs={4}>
        <Tile pos={1} boardState={boardState} player={player} setBoardState={setBoardState} setPlayer={setPlayer}></Tile>
        </Grid>
        <Grid item xs={4}>
        <Tile pos={2} boardState={boardState} player={player} setBoardState={setBoardState} setPlayer={setPlayer}></Tile>
        </Grid>
        <Grid item xs={4}>
        <Tile pos={3} boardState={boardState} player={player} setBoardState={setBoardState} setPlayer={setPlayer}></Tile>
        </Grid>
        <Grid item xs={4}>
        <Tile pos={4} boardState={boardState} player={player} setBoardState={setBoardState} setPlayer={setPlayer}></Tile>
        </Grid>
        <Grid item xs={4}>
        <Tile pos={5} boardState={boardState} player={player} setBoardState={setBoardState} setPlayer={setPlayer}></Tile>
        </Grid>
        <Grid item xs={4}>
        <Tile pos={6} boardState={boardState} player={player} setBoardState={setBoardState} setPlayer={setPlayer}></Tile>
        </Grid>
        <Grid item xs={4}>
        <Tile pos={7} boardState={boardState} player={player} setBoardState={setBoardState} setPlayer={setPlayer}></Tile>
        </Grid>
        <Grid item xs={4}>
        <Tile pos={8} boardState={boardState} player={player} setBoardState={setBoardState} setPlayer={setPlayer}></Tile>
        </Grid>
      </Grid>
    </div>
  );
};

export default Board;
