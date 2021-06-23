import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Intro from './Components/Page 1/Intro';
import WarmUpPage from './Components/Page 2/WarmUpPage';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Navbar />
        </header>
        <Switch>
          <Route exact path="/">
            <Intro />
          </Route>
          <Route path="/WarmUpPage">
            <WarmUpPage />
          </Route>
          {/* <Route path="*">
            <NotFound />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
