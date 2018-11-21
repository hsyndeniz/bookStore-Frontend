import * as React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import BookStore from './BookStore';
import Detail from './components/detail';
import Create from './components/createBook';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" component={BookStore} />
          <Route exact={true} path="/create" component={Create} />
          <Route exact={true} path="/detail/:title" component={Detail} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
