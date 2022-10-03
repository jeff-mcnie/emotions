const express = require('express')

// eslint-disable-next-line no-unused-vars
const db = require('../db/db')

const router = express.Router()

router.get('/', async (req,res) => {
  const entries = await db.getTheEntries()
  res.json(entries)
})

router.get('/:id', async (req,res) => {
  const id = req.params.id
  const entry = await db.getOneEntry(id)
  res.json(entry)
})

router.post('/', async (req,res) => {
  const entry = req.body
  const newEntry = {
    song_link: entry.song,
    song_text: entry.songText,
    has_image: 
  }
})
module.exports = router