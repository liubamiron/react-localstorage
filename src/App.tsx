import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Sign from './pages/Sign';
import Blog from './pages/Blog';
import Navigation from './pages/Navigation';

function App(this: string) {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/cart" component={Cart} />
          <Route path="/sign" component={Sign} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
