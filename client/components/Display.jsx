import React, { useState } from 'react'
import { getEntriesApi } from '../api'

function Display() {
  const [entries, setEntries] = useState([])
  console.log('in emo', entries)

  const getEntries = async () => {
    const data = await getEntriesApi()
    setEntries(data)
  }
  return (
    <div>
      <h1>TODO: Add links to my socials</h1>
      <button onClick={getEntries}>Hit me</button>
      {entries.map((entry) => (
        <>
          <div key={entry.id}>
            <a href={entry.songLink}>
              <p>My song</p>
            </a>
            <p>Words about the song: {entry.songText}</p>
            <img src={entry.image} alt="A fitting description" />
            <p>Words about the images: {entry.imageText}</p>
          </div>
        </>
      ))}
    </div>
  )
}

export default Display
