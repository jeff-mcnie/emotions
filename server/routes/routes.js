const express = require('express')

// eslint-disable-next-line no-unused-vars
const db = require('../db/db')

const router = express.Router()

router.get('/', async (req,res) => {
  let entries = await db.getTheEntries()
  res.json(entries)
})

module.exports = router