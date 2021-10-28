import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Banner from './pages/Shared/banner/Banner';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
    </div>
  );
}

export default App;
