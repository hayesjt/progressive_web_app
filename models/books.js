var orm = require("../config/orm.js");

var book = {
    selectAll: function (cb) {
        orm.selectAll(function (result) {
            cb(result);
        });
    },
    createBook: function (book_name, cb) {
        console.log(book_name);
        orm.createBook("books", "book_name", book_name, cb);
    },
    bookCompleted: function (id, cb) {
        orm.bookCompleted(id, function (result) {
            cb(result);
        });
    },
    bookNotCompleted: function (id, cb) {
        orm.bookNotCompleted(id, function (result) {
            cb(result);
        });
    },
    deleteBook: function (id, cb) {
        orm.deleteBook(id, function (result) {
            cb(result);
        });
    }
};

module.exports = book;
