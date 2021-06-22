import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from "./components/SignIn/Login";
import Cadastro from './components/Cadastro/Cadastro';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/cadastro">
          <Cadastro />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
