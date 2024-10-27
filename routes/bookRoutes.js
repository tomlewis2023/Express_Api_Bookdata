const express = require("express");
const router = express.Router();
const bookstore = require("../data/book");

//get all books
router.get("/", (req, res) => {
  try {
    res.status(200).json(bookstore);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

//get book by id

router.get("/:id", (req, res) => {
  try {
    const bookid = parseInt(req.params.id);
    const book = bookstore.find((book) => book.id === bookid);

    if (!book) {
      res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
