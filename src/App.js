import Navbar from './Components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import Intro from './Components/Intro';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Intro />
      </Router>
    </div>
  );
}

export default App;
