import * as React from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
// import Paper from '@mui/material/Paper';
import Box from "@mui/material/Box";
import Cards from "../list/Cards";

const useStyles = makeStyles({
  root: {
    padding: "4rem",
    margin:"auto",
    gap:"2rem",
  },
});

export default function Product({ product }) {
  const classes = useStyles();
  console.log(product);
  return (
    <Box className={classes.root}>
      <Grid container rowSpacing={3}>
        {product.map((e) => {
          return (
            <Grid md={3} sm={4} xs={12}>
              <Cards card={e} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
