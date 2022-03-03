import React, { useState, useEffect } from 'react'
import { getActivity } from '../api'

const Generator = () => {

  const [activitySuggestion, setActivitySuggestion] = useState('')

  const [activityType, setActivityType] = useState('')

  const [activityPrice, setActivityPrice] = useState('')

  const [activityParticipants, setActivityParticipants] = useState('')

  useEffect(() => {
    getActivity()
      .then(res => {
        // console.log('this is the response body', res)
        setActivitySuggestion(res.activity)
        setActivityType(res.type)
        setActivityPrice(res.price)
        setActivityParticipants(res.participants)
        return null
      })
      .catch((err) => {
        console.err(err.message)
      })
  }, [])
  
  useEffect(()=> {
    newActivity()
  }, [])

  const newActivity = () => {
    getActivity()
      .then(res => {
        setActivitySuggestion(res.activity)
        setActivityType(res.type)
        setActivityPrice(res.price)
        setActivityParticipants(res.participants)
        return null
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  return(
    <>
      <div className='main-container'>
        <div className='activity-container'>
          <h3>{activitySuggestion}</h3>
          <div className="activity-details">
            <p>Type: {activityType}</p>
            <p>Price: {activityPrice}</p>
            <p>Particiants: {activityParticipants}</p>
          </div>
        </div>
        <div className="button-container">
          <button onClick={newActivity} className='new-activity-button'>New Activity</button>
        </div>
      </div>
    </>
  )
}

export default Generator