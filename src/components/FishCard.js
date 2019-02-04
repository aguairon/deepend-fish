import React from 'react'
import { Link } from 'react-router-dom'

const FishCard = ({ _id, name, image }) => {
  return (
    <div className="card">
      <Link to={`/fishes/${_id}`}>
        <div className="card-header">
          <h4 className="card-header-title">{name}</h4>
        </div>

        <div className="card-image">
          <figure className="image" >
            <img src={image}/>
          </figure>
        </div>
      </Link>
    </div>
  )
}

export default FishCard
