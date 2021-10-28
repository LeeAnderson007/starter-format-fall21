import "./App.css";
import Navbar from "./components/Navbar";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router";
import { routes } from "./pages/routes";

function App() {
  const renderRoutes = () => {
    return routes.map((route) => (
      <Route exact path={route.pathname} component={route.component} />
    ));
  };
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          {renderRoutes()}
          <Route component={() => <p>react router 404 path not found</p>} />
        </Switch>
      </Container>
    </>
  );
}

export default App;