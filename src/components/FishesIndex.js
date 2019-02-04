import React from 'react'
import axios from 'axios'

class FishesIndex extends React.Component {
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
    )
  }
}

export default FishesIndex
