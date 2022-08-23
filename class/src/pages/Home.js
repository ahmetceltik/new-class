import logo from "../static/images/logoHomepage.png";

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <img
          style={{ margin: "1rem auto" }}
          src={logo}
          height={350}
          alt="shop logo"
        />
      </div>
    </div>
  );
};

export default Home;
