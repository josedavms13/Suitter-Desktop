import './App.css'
import './universalStyles/reset.css'
import './components/componentsCSS/buttons.css'
import React from "react";
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Login from "./views/Login";
import HomeMenu from "./views/HomeMenu";
import ProtectedRoute from "./provider/protectedRoutes/ProtectedRoutes";

function App() {

  const isAuth = true;

    return (
        <Router>
          <Switch>

          <Route path={'/home-menu'}>
            <ProtectedRoute path={'/home-menu'} component={HomeMenu} isAuth={isAuth}/>
            <HomeMenu/>
          </Route>

          <Route path={'/login'}>
            <Login/>
          </Route>

            <Route path={'/'}>
              <Redirect to={'/home-menu'}/>
            </Route>
          </Switch>
        </Router>
    )
}

export default App
