import React from 'react'
import { useParams } from 'react-router-dom'
const EditUser = () => {

const { id } = useParams()

  return (
    <div>EditUser n° {id}</div>
  )
}

export default EditUser

 
