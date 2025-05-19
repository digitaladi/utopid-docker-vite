import React from 'react'
import { useParams } from 'react-router-dom'
const ShowUser = () => {
    const { id } = useParams()
  return (
     <div>Utilisateur n° {id}</div>
  )
}

export default ShowUser