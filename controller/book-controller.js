var express = require("express");
var router = express.Router();
var book = require("../models/books")

// READ
router.get("/", function (req, res) {
    book.selectAll(function (data) {
        let hbsobject = {
            books: data
        };
        res.render("index", hbsobject)
    });
});

// CREATE
router.post("/api/books", function (req, res) {

    book.createBook(req.body.book_title, function (result) {
        res.json({ id: result.insertId });
    });
});

// UPDATE TO BOOK BEING COMPLETED - THIS CONTROLS WHAT DIV IT IS IN WHEN RENDERING HTML
router.put("/api/cbooks/:id", function (req, res) {
    var status = req.params.id;

    console.log("status", status)
    book.bookCompleted(status, function (result) {
        res.json(result);
    });
});

// UPDATE TO BOOK BEING UNCOMPLETED - THIS CONTROLS WHAT DIV IT IS IN WHEN REDERING HTML
router.put("/api/ubooks/:id", function (req, res) {
    var status = req.params.id;

    book.bookNotCompleted(status, function (result) {
        res.json(result);
    });
});

// DELETE A BOOK
router.delete("/api/books/:id", function (req, res) {
    var status = req.params.id;

    book.deleteBook(status, function (result) {
        res.json(result);
    })
})

module.exports = router;