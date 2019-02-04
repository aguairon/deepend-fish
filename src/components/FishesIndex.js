import React from 'react'
import axios from 'axios'

import FishCard from './FishCard'

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
          <h1 className="title is-1">Most common Fishes</h1>
          <div className="columns is-multiline">
            {this.state.fishes.map(fish =>
              <div className="column is-one-quarter" key={fish._id}>
                <FishCard {...fish}/>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default FishesIndex
