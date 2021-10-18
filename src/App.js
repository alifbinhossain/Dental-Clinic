import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Screens/Components/Header/Header";
import Home from "./Screens/Pages/Home/Home";

function App() {
  return (
    <div className="main">
      <Router>
        <Header></Header>
        <Switch>
          <Home></Home>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
