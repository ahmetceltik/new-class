import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LeftMenuLayout from "./components/LeftMenuLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const theme = createTheme({
  typography: {
    body1: {
      color: "#C0C080",
    },
    h3: {
      color: "#C0C080",
    },
    h2: {
      color: "#C0C080",
    },
    h4: {
      color: "#C0C080",
    },
    h5: {
      color: "#C0C080",
    },
    body2: {
      color: "#C0C080",
      fontSize: "1.1rem",
    },

    fontFamily: "Nunito",
    fontWeightLight: 400,
    fontWeightRegular: 600,
    fontWeightMedium: 700,
    fontWeightBold: 800,
  },
});

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <LeftMenuLayout>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/services">
                <Services />
              </Route>
              <Route path="/products">
                <Products />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </LeftMenuLayout>
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
