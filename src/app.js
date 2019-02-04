import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import 'bulma'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      fishes: []
    }
  }

  componentDidMount() {
    axios.get('/api/fishes')
      .then(res => this.setState({ fishes: res.data }))
  }

  render() {
    return(
      <main>
        <h1 className="title is-1">Hello</h1>
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              {this.state.fishes.map(fish =>
                <div className="column is-one-quarter" key={fish._id}>
                  <h2 className="title is-2">{fish.name}</h2>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
