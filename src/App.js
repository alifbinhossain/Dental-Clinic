import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AllProvider from "./context/AllProvider";
import Footer from "./Screens/Components/Footer/Footer";
import Header from "./Screens/Components/Header/Header";
import PrivateRoute from "./Screens/Components/PrivateRoute/PrivateRoute";
import ServiceDetails from "./Screens/Components/ServiceDetails/ServiceDetails";
import Dentists from "./Screens/Pages/Dentists/Dentists";
import Form from "./Screens/Pages/Form/Form";
import Signin from "./Screens/Pages/Form/Signin/Signin";
import Signup from "./Screens/Pages/Form/Signup/Signup";
import Home from "./Screens/Pages/Home/Home";
import Services from "./Screens/Pages/Services/Services";

function App() {
  return (
    <div className="main">
      <AllProvider>
        {/* -------------------------------------------------------------------------- */
        /*                                 OPEN ROUTES                                */
        /* -------------------------------------------------------------------------- */}
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>

            {/* -------------------------------------------------------------------------- */
            /*                               PRIVATE ROUTES                               */
            /* -------------------------------------------------------------------------- */}
            <PrivateRoute exact path="/service/:id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute exact path="/dentists">
              <Dentists></Dentists>
            </PrivateRoute>

            <Route exact path="/form/signin">
              <Form>
                <Signin></Signin>
              </Form>
            </Route>
            <Route exact path="/form/signup">
              <Form>
                <Signup></Signup>
              </Form>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AllProvider>
    </div>
  );
}

export default App;
