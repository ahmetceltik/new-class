import React from "react";

import makeStyles from "@mui/styles/makeStyles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import hottowel from "../static/images/cuts/350px.jpg";
import skinfade from "../static/images/cuts/350px.jpg";
import beardtrim from "../static/images/cuts/350px.jpg";
import children from "../static/images/cuts/350px.jpg";
import haircut from "../static/images/cuts/350px.jpg";

const useStyles = makeStyles({
  priceImg: {
    borderRadius: 10,
    width: "90%",
    height: "auto",
  },
});

const Services = () => {
  const classes = useStyles();

  const services = [
    {
      id: "img1",
      image: skinfade,
      name: "Skin Fade",
      price: "€17",
    },
    {
      id: "img2",
      image: hottowel,
      name: "Hot Towel",
      price: "€20",
    },
    {
      id: "img3",
      image: haircut,
      name: "Haircut",
      price: "€15",
    },
    {
      id: "img4",
      image: beardtrim,
      name: "Beard Trim",
      price: "€5",
    },
    {
      id: "img5",
      image: skinfade,
      name: "O.A.P",
      price: "€10",
    },
    {
      id: "img6",
      image: children,
      name: "Children",
      price: "€12",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        mt: 2,
        p: 2,
        alignItems: "center",
        flexGrow: 1,
        justifyContent: "center",
      }}>
      <Grid container>
        <Grid item xs={12}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h2" sx={{ mb: "1rem" }}>
              Services
            </Typography>
          </Box>
        </Grid>
        {services.map((service) => (
          <Grid container key={service.id} sx={{ my: 2 }} spacing={3}>
            <Grid item xs={12} sm={4} md={4} sx={{ textAlign: "center" }}>
              <img
                src={service.image}
                alt="service img"
                className={classes.priceImg}
              />
            </Grid>
            <Grid
              item
              xs
              sm
              md
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                justifyContent: "center",
                // alignItems: "center",
              }}>
              <Typography variant="h4"> {service.name} </Typography>
              <Typography variant="h5"> {service.price} </Typography>
              <Typography
                variant="body1"
                sx={(theme) => ({
                  [theme.breakpoints.down("sm")]: {
                    pb: "2.5rem",
                    borderBottom: "1px solid #C0C080",
                  },
                })}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.Eos
                iusto quae sed doloremque, rerum assumenda pariatur reiciendis,
                quis quos cupiditate delectus recusandae quasi illo voluptatum,
                tempora facere necessitatibus.Aperiam, aliquam.
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
