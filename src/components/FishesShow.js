import React from 'react'
import axios from 'axios'

class FishesShow extends React.Component {

  constructor() {
    super()

    this.state = {}
  }

  componentDidMount() {
    console.log(`/api/fishes/${this.props.match.params.id}`)
    axios.get(`/api/fishes/${this.props.match.params.id}`)
      .then(res => this.setState({ fish: res.data }))
      .catch(err => console.log(err.message))
  }

  render() {
    if(!this.state.cheese) return null
    const { name, image } = this.state.fish
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1">{name}</h1>
          <h2 className="subtitle is-2">{origin}</h2>
          <hr />

          <div className="columns">
            <div className="column">
              <figure className="image">
                <img src={image} alt={name} />
              </figure>
            </div>
          </div>

        </div>
      </section>
    )
  }
}

export default FishesShow
