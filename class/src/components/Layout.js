import React from "react";
import clsx from "clsx";
import makeStyles from '@mui/styles/makeStyles';
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TransparentToColorNavbar from "../components/Navbar";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Hidden } from "@mui/material";

import logo from "../static/images/logo500px.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  menu: {
    flexDirection: "column",
    flexGrow: 1,
  },
  appbar: {
    borderBottom: "1px solid grey",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-evenly",
    ...theme.mixins.toolbar,
  },
}));

export default function TemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({ right: false });

  // const menuItems = [
  //   {
  //     id: "home",
  //     name: "Home",
  //     link: "/",
  //   },
  //   {},
  // ];

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        <ListItem>
          <ListItemIcon button>
            <ChevronRightIcon />
          </ListItemIcon>
        </ListItem>
        {["Home", "Services", "Products", "Contact"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      <TransparentToColorNavbar>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <Link to="/">
              <img height={90} src={logo} alt="logo" />
            </Link>
            <Hidden mdDown implementation="css">
              <Button>Home</Button>
              <Button>Home</Button>
              <Button>Home</Button>
              <Button>Home</Button>
            </Hidden>
            <Hidden implementation="css">
              <Button
                className={classes.menuButton}
                onClick={toggleDrawer("right", true)}>
                <MenuOpenIcon />
              </Button>
            </Hidden>
          </Toolbar>
        </AppBar>
      </TransparentToColorNavbar>

      {/* Menu for big screen */}
      <div>
        <React.Fragment>
          <Drawer
            anchor="right"
            open={state["right"]}
            onClose={toggleDrawer("right", false)}>
            <div>{list("right")}</div>
          </Drawer>
        </React.Fragment>
      </div>

      {/* Menu for small screens */}

      <main
        style={{
          marginTop: "85px",
          paddingTop: "200px",
          paddingBottom: "300px",
        }}>
        <Typography style={{ marginBottom: 200 }} variant="h1">
          Test
        </Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facere
        optio repellendus deleniti eius enim iure, exercitationem ducimus
        obcaecati veritatis fugiat, voluptatem beatae iusto atque. Fugit natus
        debitis nulla pariatur iste praesentium corrupti obcaecati, ut modi esse
        ipsum impedit aliquam excepturi facere earum sint quam recusandae dicta
        ullam mollitia culpa. Quod, fugit! Sunt exercitationem dolores, rerum
        eligendi ratione impedit voluptates consequuntur explicabo, optio,
        inventore laboriosam amet. Magni, ratione sapiente. Harum sapiente culpa
        magni voluptatibus facilis repellendus repudiandae deleniti ipsam,
        doloribus eveniet modi ullam dolorum eligendi hic! Odio reprehenderit
        maiores autem itaque deserunt dolore mollitia nihil necessitatibus. Id
        corporis, dolorem blanditiis facere commodi delectus. Iure et impedit
        facere sit quas dignissimos expedita optio ipsam cupiditate minus, quam
        ipsum. Atque repudiandae incidunt ab ipsam mollitia architecto unde iure
        repellendus qui dignissimos cum, sed temporibus a. Accusantium alias
        perspiciatis sunt rerum repudiandae porro vel. Mollitia quod blanditiis
        laborum ducimus placeat praesentium minus asperiores aperiam eius, iste
        doloribus recusandae ut rem sed reprehenderit et, hic tempora itaque
        maxime dolor commodi quam voluptatibus. Eaque illo possimus rerum veniam
        suscipit optio, laboriosam eos modi aspernatur corrupti quam nesciunt
        minima dolorum nemo praesentium sequi, ab saepe iste. Illum maxime iure
        ea id rerum deleniti, vel repudiandae unde?m blanditiis facere commodi
        delectus. Iure et impedit facere sit quas dignissimos expedita optio
        ipsam cupiditate minus, quam ipsum. Atque repudiandae incidunt ab ipsam
        mollitia architecto unde iure repellendus qui dignissimos cum, sed
        temporibus a. Accusantium alias perspiciatis sunt rerum repudiandae
        porro vel. Mollitia quod blanditiis laborum ducimus placeat praesentium
        minus asperiores aperiam eius, iste doloribus recusandae ut rem sed
        reprehenderit et, hic tempora itaque maxime dolor commodi quam
        voluptatibus. Eaque illo possimus rerum veniam suscipit optio,
        laboriosam eos modi aspernatur corrupti quam nesciunt minima dolorum
        nemo praesentium sequi, ab saepe iste. Illum maxime iure ea id rerum
        deleniti, vel repudiandae unde?
        {props.children}
      </main>
    </div>
  );
}
