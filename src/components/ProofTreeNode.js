import { Typography, Box, Grid, Paper, Button} from "@mui/material";
import { green } from "@mui/material/colors";

// Each node in the graph is a ProofTreeNode element, which allows us to render arbitrary HTML within the SVG.
const RenderForeignObjectNode  = ({nodeDatum,
    toggleNode,
    foreignObjectProps,
    classes}) => {

        const board = Array(9).fill("X");
        
        const Newboard = nodeDatum;
        console.log("Newboard", Newboard);
        console.log("board", board);
        
        const renderCell = (index) => (
            <Grid item xs={4} key={index}>
              <Button
                variant="contained"
                color="primary"
                size="large"
              >
                {board[index]}
              </Button>
            </Grid>
          );
    
  return (
    <>
      <foreignObject {...foreignObjectProps}>
        <Grid container justifyContent="center" alignItems="center" color={green}>
        <Paper elevation={3} style={{ padding: '20px' }}>
            <Grid container spacing={2}>
            {board.map((cell, index) => renderCell(index))}
            </Grid>
        </Paper>
        </Grid>
      </foreignObject>
    </>
  );
};

export { RenderForeignObjectNode };
