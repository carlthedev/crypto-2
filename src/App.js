import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import About from './Pages/About/About.js';

import Home from './Pages/Home/Home.js';

import Testimonials from './Pages/Testimonials/Testimonials.js';

const App = () => {
  return (
    <Router>
      <main>
        <switch>
          <Route path="src/Pages/About/About.js" exact>
            <About/>
          </Route>
          <Route path="src/Pages/Home/Home.js" exact>
            <Home/>
          </Route>
          <Route path="src/Pages/Testimonials/Testimonials.js" exact>
            <Testimonials/>
          </Route>
          <Redirect to="/"/>
        </switch>
      </main>
    </Router>
  );
}

export default App;
