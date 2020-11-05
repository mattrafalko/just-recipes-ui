import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Recipes from './components/Views/Recipes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Views/Login';

export const UserContext = React.createContext({});
export const UserContextUpdate = React.createContext(() => {});

function App() {
  const [userId, setUserId] = useState(null);
  return (
    <div className="App">
      <Router>
        <Header appName="Just Recipes" userId="6"></Header>
          <UserContext.Provider value={userId}>
            <UserContextUpdate.Provider value={setUserId}>
              <Switch>
                <Route exact path="/"><p>This is the home page</p></Route>
                <Route path="/about"><p>This is the about page</p></Route>
                <Route path="/recipes"><Recipes/></Route>
                <Route path="/login"><Login/></Route>
              </Switch>
            </UserContextUpdate.Provider>
          </UserContext.Provider>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
