import React from 'react';
import './App.css';
import Begin from './components/begin/Indexbegin';
import Event from './components/event/Indexevent';
import Redux from './components/redux/Indexredux';
import Redux2 from './components/redux/Indexredux2';
import Nav from './components/Nav';
import About from './components/About';
import Post from './components/post/Post';
import Wpbooks from './components/wpbooks/Books';
import Wpbooksdetail from './components/wpbooks/Booksdetail';
import Links from './components/Links';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  return (
    <Router>
      <div className="App">
            

              <Nav />
              <Switch> 

                 <Route path="/" exact component = {Home} />
                 <Route path="/begin"  component = {Begin} />
                 <Route path="/event"  component = {Event} />
                  <Route path="/redux"  component = {Redux} />
                  <Route path="/redux2"  component = {Redux2} />
                 <Route path="/about"  component = {About} />
                 <Route path="/post"  component = {Post} />
                  <Route path="/wpbooks"  component = {Wpbooks} />
                  <Route path="/wpbooksdetail/:id"  component = {Wpbooksdetail} />
                 <Route path="/links"  component = {Links} />
            
              </Switch>
              



      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
            <h1>home page</h1>
        </div>
  )
}

export default App;