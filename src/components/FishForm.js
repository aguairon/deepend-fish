import React from 'react'

const FishForm = ({ data, errors, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className="input"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={data.name}
          />
        </div>
        {errors.name && <small className='help is-danger'>{errors.name}</small>}
      </div>
      <div className="field">
        <label className="label">Image</label>
        <div className="control">
          <input
            className="input"
            placeholder="Image"
            name="image"
            onChange={handleChange}
            value={data.image}
          />
        </div>
        {errors.image && <small className='help is-danger'>{errors.image}</small>}
      </div>
      <button className="button is-primary">Submit</button>
    </form>
  )
}

export default FishForm
