import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const {userid}=useParams();
  return (
    <div>
        <p>User:The hidden component taking in multiple id's</p>
        <p>Current User Id : {userid}</p>
    </div>
  )
}
