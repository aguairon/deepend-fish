import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import FishesIndex from './components/FishesIndex'
import FishesNew from './components/FishesNew'

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <main>
          <Navbar />
          <h1 className="title is-1">Hello</h1>
          <Switch>
            <Route path="/fishes/new" component={FishesNew} />
            <Route path="/fishes" component={FishesIndex} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
