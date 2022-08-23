import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { CardProduct } from "../components/Product";

import wax from "../static/images/wax500.png";

const Products = () => {
  const text = "Range of Hair Waxes";
  return (
    <Box>
      <Grid container sx={{ p: 3 }}>
        <Grid
          container
          spacing={3}
          // justifyContent="space-evenly"
          flexWrap="wrap">
          <CardProduct img={wax} txt={text} />
          <CardProduct img={wax} txt={text} />
          <CardProduct img={wax} txt={text} />
          <CardProduct img={wax} txt={text} />
          <CardProduct img={wax} txt={text} />
          <CardProduct img={wax} txt={text} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Products;
