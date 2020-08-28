import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./modules/main/components/Home/Home";
import Signup from "./modules/auth/components/Signup/Signup";
import Signin from "./modules/auth/components/Signin/Signin";

export default function Router() {
  return (
    <Switch>
      <Route path='/' exact component={Home}></Route>
      <Route path='/signup' component={Signup}></Route>
      <Route path='/signin' component={Signin}></Route>
    </Switch>
  );
}
