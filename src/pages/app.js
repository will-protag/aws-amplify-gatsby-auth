import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Details from "../components/Details"
import Home from "../components/Home"
import Login from "../components/Login"
import SignUp from "../components/SignUp"
import PrivateRoute from "../components/PrivateRoute"
import Downloads from "../components/Downloads"


const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/home" component={Home} />
      <PrivateRoute path="/app/profile" component={Details} />
      <PrivateRoute path="/app/downloads" component={Downloads} />
      <Login path="/app/login" />
      <SignUp path="/app/signup" />
    </Router>
  </Layout>
)

export default App