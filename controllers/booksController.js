const BookModel = require('../models/books')

const getBooks = async()=>{
    return BookModel.find({})
}

module.exports={
    getBooks
}