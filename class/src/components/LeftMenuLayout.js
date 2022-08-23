import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { NavLink } from "react-router-dom";

// Custom components
import TransparentToColorNavbar from "./Navbar";

// Material-ui components
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Hidden from "@mui/material/Hidden";
import Grid from "@mui/material/Grid";

// Material-ui Icons
import MenuIcon from "@mui/icons-material/Menu";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocationOnIcon from "@mui/icons-material/LocationOn";

// Images
import logo from "../static/images/logo500px.png";

const drawerWidth = 200;
const bigDrawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgba(30, 30, 30, 0.9)",
  },

  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "rgb(40, 40, 40)",
    [theme.breakpoints.down("md")]: {
      display: "none !important",
    },
  },

  smallScreenDrawer: {
    width: bigDrawerWidth,
    flexShrink: 1,
  },
  smallScreenDrawerPaper: {
    width: bigDrawerWidth,
    backgroundColor: "rgb(40, 40, 40)",
  },

  logo: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "1rem 0",
  },
  links: {
    "& a": {
      "& span": {
        fontSize: "1.2rem",
        transitionDuration: "0.2s",
      },
      "& a": {
        textDecoration: "none",
      },
      "&:hover": {
        backgroundColor: "#C0C080",

        "& span": {
          fontSize: "1.5rem",
          transitionDuration: "0.3s",
          color: "rgb(40, 40, 40)",
        },
      },
    },
  },
  name: {
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.5rem",
      fontWeight: 700,
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.1rem",
      fontWeight: 700,
    },
    color: "#C0C080",
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  menu: {
    justifyContent: "space-between",
  },
  active: {
    backgroundColor: "#C0C080",

    "& div": {
      "& span": {
        fontSize: "1.5rem",
        color: "rgb(40,40,40)",
      },
    },
  },
  content: {
    minHeight: "100vh",
    flexGrow: 1,
    [theme.breakpoints.up("md")]: {
      marginRight: drawerWidth,
    },
    padding: theme.spacing(2, 0, 0, 0),
  },
  light: {
    color: "#C0C080",
    fontSize: "1.3rem",
  },

  footer: {
    bottom: 0,
    right: 0,
    left: 0,
    padding: "1rem",
    borderTop: "1px solid #C0C080",
    textAlign: "center",
    minHeight: theme.spacing(4),
    marginTop: theme.spacing(6),
    backgroundColor: "rgb(40, 40, 40)",
    zIndex: 12452,
  },

  socialLogos: {
    listStyle: "none",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "0 150px",
  },
}));

export default function LeftMenuLayout(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  // const [activeLink]

  const menuItems = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "Services",
      url: "/services",
    },
    {
      id: 3,
      name: "Products",
      url: "/products",
    },
    // {
    //   id: 4,
    //   name: "Prices",
    //   url: "/pricing",
    // },
    {
      id: 5,
      name: "Contact",
      url: "/contact",
    },
  ];

  const navigation = (
    <List className={classes.links}>
      {menuItems.map((item) => (
        <ListItem
          button
          component={NavLink}
          activeClassName={classes.active}
          exact
          to={item.url}
          onClick={() => setOpen(false)}
          key={item.id}>
          <ListItemText primary={item.name} style={{ color: "#C0C080" }} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TransparentToColorNavbar>
        <AppBar
          position="fixed"
          color="transparent"
          sx={(theme) => ({
            [theme.breakpoints.up("md")]: {
              width: `calc(100% - ${drawerWidth}px)`,
              mr: `${drawerWidth}px`,
            },
            borderBottom: "1px solid #C0C080",
          })}>
          <Toolbar className={classes.menu}>
            <Typography
              sx={(theme) => ({
                [theme.breakpoints.up("sm")]: {
                  fontSize: "1.5rem",
                  fontWeight: 700,
                },
                [theme.breakpoints.down("md")]: {
                  fontSize: "1.1rem",
                  fontWeight: 700,
                },
                color: "#C0C080",
              })}
              noWrap>
              {/* Class Barber Shop Kilkenny */}
              CLASS BARBER SHOP KILKENNY
            </Typography>
            <Hidden mdUp implementation="css">
              <Button onClick={() => setOpen(true)}>
                <MenuIcon fontSize="large" style={{ color: "#C0C080" }} />
              </Button>
            </Hidden>
          </Toolbar>
        </AppBar>
      </TransparentToColorNavbar>

      {/* Big screen Menu */}
      <Hidden mdDown implementation="css">
        <Drawer
          sx={(theme) => ({
            width: drawerWidth,
            flexShrink: 1,
            backgroundColor: "rgb(40, 40, 40)",
            [theme.breakpoints.down("md")]: {
              display: "none !important",
            },
          })}
          open={!open}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="right">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              py: "1rem",
            }}>
            <img src={logo} height="120" alt="logo" />
          </Box>
          <Divider style={{ backgroundColor: "#C0C080" }} />
          {navigation}
        </Drawer>
      </Hidden>

      {/* Small screen Menu */}
      <Hidden mdUp implementation="css">
        <Drawer
          anchor="right"
          open={open}
          onClose={() => setOpen(false)}
          className={classes.smallScreenDrawer}
          classes={{ paper: classes.smallScreenDrawerPaper }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              py: "1rem",
            }}>
            <img src={logo} height="140" alt="logo" />
          </Box>
          <Divider />
          {navigation}
        </Drawer>
      </Hidden>

      <main className={classes.content}>
        <Box className={classes.toolbar} />
        {props.children}
      </main>
      <footer className={classes.footer}>
        <Grid container item xs={12}>
          <Grid item xs={12} sm={4} style={{}}>
            <Typography variant="h5">Find us on social media!</Typography>

            <ul className={classes.socialLogos}>
              <li>
                <a
                  href="https://www.instagram.com/class.barber.official/"
                  rel="noreferrer"
                  target="_blank">
                  <Instagram
                    style={{
                      color: "rgb(236, 234, 234)",
                      background:
                        "radial-gradient(circle at 20% 100%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                      borderRadius: "15px",
                      fontSize: "4rem",
                    }}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/Classbarbershopkk/"
                  rel="noreferrer"
                  target="_blank">
                  <Facebook style={{ color: "#1877f2", fontSize: "4.8rem" }} />
                </a>
              </li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              sx={{
                "& a": {
                  color: "#C0C080",
                  textDecoration: "none",
                },
              }}>
              We are
              <a
                href="https://www.google.com/maps/place/24+Rose+Inn+St,+Gardens,+Kilkenny,+R95+YE33/@52.651208,-7.2538594,17z/data=!3m1!4b1!4m5!3m4!1s0x485d309e3f491e31:0x2d52587831c5b466!8m2!3d52.651208!4d-7.2516707"
                rel="noreferrer"
                target="_blank">
                here.
                <LocationOnIcon />
              </a>
            </Typography>

            <br />
            <Typography
              sx={{
                "& a": {
                  color: "#C0C080",
                  textDecoration: "none",
                },
              }}>
              <a href="tel:00">
                <PhoneIcon /> 1234567891
              </a>
            </Typography>
            <Typography
              sx={{
                "& a": {
                  color: "#C0C080",
                  textDecoration: "none",
                },
              }}>
              <a href="mailto:email">
                <AlternateEmailIcon />
                email@email.com
              </a>
            </Typography>
            <Typography
              // className={classes.contacts}
              sx={{
                "& a": {
                  color: "#C0C080",
                  textDecoration: "none",
                },
              }}>
              24 Rose Inn St, Gardens, Kilkenny, R95 YE33
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5">Opening Hours</Typography>
            <Typography variant="h6">
              Mon-Saturday 9:00 - 18:00 <br /> Fridays until 19:00!
            </Typography>
          </Grid>
        </Grid>
      </footer>
    </div>
  );
}
