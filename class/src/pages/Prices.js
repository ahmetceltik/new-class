import React from "react";

import makeStyles from '@mui/styles/makeStyles';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import hottowel from "../static/images/cuts/hottowel2.jpg";
import skinfade from "../static/images/cuts/skinfade.jpeg";
import beardtrim from "../static/images/cuts/beard.jpg";
import children from "../static/images/cuts/children.jpeg";
import haircut from "../static/images/cuts/haircut.jpeg";
import { Box } from "@mui/material";

import ImageList from "@mui/material/ImageList";  
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: theme.spacing(2),
    flexGrow: 1,
    justifyContent: "center",
  },
  priceImg: {
    borderRadius: 10,
    // maxHeight: 350,
    // maxWidth: 350,
    width: 350,
    height: 350,
    flexGrow: 1,
    margin: "auto",
  },
  listRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: "100%",
    height: "100%",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

const Prices = () => {
  const classes = useStyles();

  const priceList = [
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
    <div className={classes.root}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h2" style={{ marginBottom: "1rem" }}>
            Our Prices
          </Typography>
        </Grid>

        {priceList.map((item) => (
          <Grid item xs={12} sm={12} md={6} key={item.id}>
            <Box justifyContent="center">
              <Typography variant="h3">
                {item.name} {item.price}
              </Typography>
              <img
                src={item.image}
                alt={item.name}
                className={classes.priceImg}
              />
            </Box>
          </Grid>
        ))}
      </Grid>

      <div className={classes.listRoot}>
        {/* <ImageList rowHeight={400} className={classes.imageList}>
          <ImageListItem key="Subheader" cols={2} style={{ height: "auto" }}>
            <ListSubheader component="h2">Price List</ListSubheader>
          </ImageListItem>
          {priceList.map((item) => (
            <ImageListItem key={item.id}>
              <img src={item.image} alt={item.name} />
              <ImageListItemBar
                title={item.name}
                subtitle={<span>by: {item.price}</span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${item.name}`}
                    className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList> */}
      </div>
    </div>
  );
};

export default Prices;
