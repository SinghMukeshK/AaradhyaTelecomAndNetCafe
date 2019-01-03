import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

import indexRoutes from "./routes/index.jsx";
import AuthProvider from './context/AuthProvider';
import NewsProvider from './context/NewsProvider';

const hist = createBrowserHistory();

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green
  },
  status: {
    danger: 'orange',
  },
});

ReactDOM.render(
  <AuthProvider>
    <NewsProvider>
      <MuiThemeProvider theme={theme}>
        <Router history={hist}>
          <Switch>
            {indexRoutes.map((prop, key) => {
              return <Route path={prop.path} component={prop.component} key={key} />;
            })}
          </Switch>
        </Router>
      </MuiThemeProvider >
    </NewsProvider>
  </AuthProvider>,
  document.getElementById("root")
);