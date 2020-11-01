import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Recipes from './components/Views/Recipes'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Views/Login';

function App() {
  const [userId, setUserId] = useState('');
  return (
    <div className="App">
      <Router>
        <Header appName="Just Recipes" userId={userId}></Header>
          <Switch>
            <Route exact path="/"><p>This is the home page</p></Route>
            <Route path="/about"><p>This is the about page</p></Route>
            <Route path="/recipes"><Recipes userId={userId}/></Route>
            <Route path="/login"><Login setIdOnLogin={(e) => setUserId(e)}/></Route>
          </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
