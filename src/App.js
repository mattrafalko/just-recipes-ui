import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Recipes from './components/Views/Recipes'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Views/Login';
import { UserContext } from './UserContext';

function App() {
  const [userId, setUserId] = useState(null);
  return (
    <div className="App">
      <Router>
        <Header appName="Just Recipes" userId={userId}></Header>
          <Switch>
            <UserContext.Provider value={{userId, setUserId}}>
              <Route exact path="/"><p>This is the home page</p></Route>
              <Route path="/about"><p>This is the about page</p></Route>
              <Route path="/recipes"><Recipes/></Route>
              <Route path="/login"><Login/></Route>
            </UserContext.Provider>
          </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
