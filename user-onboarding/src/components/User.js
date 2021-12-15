import React from 'react'

export default function User(props) {
  const { details } = props

  if (!details) {
    return <h3>Working fetching your user&apos;s details...</h3>
  }

  return (
    <div className='user form-container'>
      <h2>{details.name}</h2>
      <h2>Email: {details.email}</h2>
    </div>
  )
}