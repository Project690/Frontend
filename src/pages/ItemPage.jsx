import React from 'react'
import { useParams } from 'react-router-dom'
import db from '../components/db.json'

const ItemPage = () => {
  const { id } = useParams()
  const item = db.find(item => item.id === parseInt(id))

  const filteredKeys = Object.keys(item).filter(key => key !== 'id' && key !== 'pictures')

  return (
    <div>
      <h2>Item Details</h2>
      {filteredKeys.map(key => (
        <p key={key}>{key.replace(/_/g, ' ').replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}: {item[key]}</p>
      ))}
      {item.pictures && (
        <div>
          <h3>Pictures:</h3>
          {item.pictures.map((picture, index) => (
            <img key={index} src={picture} alt={`Picture ${index + 1}`} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ItemPage