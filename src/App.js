import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';

import Booking from './pages/Booking/Booking';
import Error from './pages/Error/Error';
import Footer from './pages/Footer/Footer';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Header from './pages/Shared/Header/Header';



function App() {
  return (
    <div className="App">
      
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
        <Home></Home>
          </Route>
          <PrivateRoute path="/book/:bookingId">
        <Booking></Booking>
          </PrivateRoute>
          <Route path="/Login">
            <Login></Login>
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
      </AuthProvider>
     
    </div>
  );
}

export default App;

// Discover your next favorite destination
// Get inspired from guides around the world — with expert tips and recommendations from the Wanderlog community.