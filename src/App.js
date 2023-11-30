import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Spots from "./components/Spots";

const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/spots" component={Spots}/>
      </Switch>
    </>
  );
};

export default App;
