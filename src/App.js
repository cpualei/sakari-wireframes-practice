import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Spots from "./components/Spots";
import SpotDetails from "./components/SpotDetails";

const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/spots/:spotId" component={SpotDetails}/>
        <Route exact path="/" component={Spots}/>
      </Switch>
    </>
  );
};

export default App;
