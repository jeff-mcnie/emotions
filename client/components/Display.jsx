import React, { useState, useEffect } from 'react'
import { getEntriesApi } from '../api'

function Display() {
  const [entries, setEntries] = useState([])

  const getEntries = async () => {
    const data = await getEntriesApi()
    setEntries(data)
  }
  console.log(entries)

  useEffect(() => {
    getEntries()
  }, [])

  return (
    <div>
      {entries.map((entry) => (
        <>
          <h4>Entry</h4>
          <div key={entry.id}>
            <a href={entry.songLink}>
              <h4>My song</h4>
            </a>
            <h4>Words about the song:</h4>
            <p>{entry.songText}</p>
            {entry.hasImages == 1 && (
              <img src={entry.image} alt="A meaningful descriptive text" />
            )}
            {entry.hasImages == 1 && (
              <>
                <h4>Words about the images:</h4>
                <p>{entry.imageText}</p>
              </>
            )}
          </div>
        </>
      ))}
    </div>
  )
}

export default Display
