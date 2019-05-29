import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import ListView from './components/ListView';
import Detail from './components/Detail';
import { Route, BrowserRouter, Switch } from 'react-router-dom';




class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <Header />
          <Switch>
            <Route exact path="/" component={ListView} />
            <Route path="/about" component={About} />
            <Route path="/:productID" component={Detail} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
