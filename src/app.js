import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'

import './style.scss'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import FishesIndex from './components/FishesIndex'
import FishesNew from './components/FishesNew'
import FishesShow from './components/FishesShow'
import Hero from './components/Hero'

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <main>
          <Navbar />
          <Switch>
            <Route path="/fishes/new" component={FishesNew} />
            <Route path="/fishes/:id" component={FishesShow} />
            <Route path="/fishes" component={FishesIndex} />
            <Route path="/" component={Hero} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
