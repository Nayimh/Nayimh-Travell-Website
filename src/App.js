import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route>
        <Home></Home>
        </Route>
        </Switch>
        <Footer></Footer>
     </Router>
    </div>
  );
}

export default App;
