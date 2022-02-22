import React, { useState, useEffect } from 'react'
import { getActivity } from '../api'

const Generator = () => {

  const [activitySuggestion, setActivitySuggestion] = useState('')

  useEffect(() => {
    getActivity()
      .then(res => {
        setActivitySuggestion(res.activity)
        return null
      })
      .catch((err) => {
        console.err(err.message)
      })
  }, [])
  
  
  const newActivity = () => {
    getActivity()
      .then(res => {
        setActivitySuggestion(res.activity)
        return null
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  useEffect(()=> {
    newActivity()
  }, [])


  return(
    <>
      <div className='main-container'>
        <div className='activity-container'>
          <h3>{activitySuggestion}</h3>
        </div>
        <div>
          <button onClick={newActivity} className='new-activity-button'>New Activity</button>
        </div>
      </div>
    </>
  )
}

export default Generator