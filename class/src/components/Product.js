import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const Product = ({ image, text }) => {
  return (
    <React.Fragment>
      <Grid item md={3}>
        <img
          src={image}
          alt="wax img"
          style={{ width: "100%", minWidth: "50%" }}
        />
      </Grid>
      <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
        <Typography variant="h5">{text ? text : "Placeholder text"}</Typography>
      </Grid>
    </React.Fragment>
  );
};

export const CardProduct = ({ img, txt }) => {
  return (
    <Grid item sx={{ textAlign: "center" }} xs={12} sm={6} lg={3}>
      <Card sx={{ backgroundColor: "rgba(60, 60, 60, 0.6)" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          image={img}
          sx={{ p: 2 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Lizard
          </Typography>
          <Typography variant="body2">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Product;
