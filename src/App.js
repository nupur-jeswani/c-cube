import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import Intro from './Components/Page 1/Intro';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Navbar />
        </header>
          <Intro />
      </Router>
    </div>
  );
}

export default App;
