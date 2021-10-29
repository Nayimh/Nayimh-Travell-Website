import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Error from './pages/Error/Error';
import Footer from './pages/Footer/Footer';
import Guide from './pages/guide/Guide';
import Home from './pages/Home/Home';
import Header from './pages/Shared/Header/Header';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
        <Home></Home>
          </Route>
          <Route path="/guide">
            <Guide></Guide>
          </Route>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
     </Router>
    </div>
  );
}

export default App;

// Discover your next favorite destination
// Get inspired from guides around the world — with expert tips and recommendations from the Wanderlog community.