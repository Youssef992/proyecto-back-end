const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const { booksController } = require('../controllers')

const { getBooks} = booksController

router.get('/', async (req, res) => {
  const books = await getBooks()
  res.send(books)
})

module.exports = router