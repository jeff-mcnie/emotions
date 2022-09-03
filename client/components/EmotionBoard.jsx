import React, { useState } from 'react'
import { getEntriesApi } from '../api'
import Display from './Display'

function EmotionBoard() {
  const [entries, setEntries] = useState(null)
  console.log('in emo', entries)

  const getEntries = async () => {
    const data = await getEntriesApi()
    setEntries(data)
  }
  return (
    <div>
      <h1>TODO: Grab all information from the database</h1>
      <h1>TODO: Display each database entries picture </h1>
      <h1>
        TODO: Make each database picture clickable to link to a page displaying
        the full information of the entry{' '}
      </h1>
      <button onClick={() => getEntries()}>Hit me</button>
      <Display entries={entries} />
    </div>
  )
}

export default EmotionBoard
