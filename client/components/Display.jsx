import React from 'react'

function Display(props) {
  console.log('in display', props)

  return (
    <div>
      <h1>TODO: Add links to my socials</h1>
      {props.entries?.map((entry) => {
        ;<>
          <div key={entry?.id}>
            <p>{entry?.songLink}</p>
            <p>{entry?.songText}</p>
            <img src={entry?.image} alt="A fitting description" />
            <p>{entry?.imageText}</p>
          </div>
        </>
      })}
    </div>
  )
}

export default Display
