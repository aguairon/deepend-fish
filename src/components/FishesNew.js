import React from 'react'
import axios from 'axios'

import FishForm from './FishForm'

class FishesNew extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        name: '',
        origin: '',
        image: '',
        tastingNotes: ''
      },
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value }
    const errors = {...this.state.errors, [name]: null }
    this.setState({ data, errors })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios
      .post('/api/fishes', this.state.data,)
      .then(() => this.props.history.push('/fishes'))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  render() {
    return(
      <main className="section">
        <div className="container">
          <FishForm
            data={this.state.data}
            errors={this.state.errors}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </main>
    )
  }
}

export default FishesNew
