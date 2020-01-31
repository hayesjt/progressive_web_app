var connection = require("./connection");

var orm = {
    //READ/DISPLAY ALL IN DATABASE FUNCTION
    selectAll: function (cb) {
        var queryString = "SELECT * FROM books"
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            cb(res);
        })
    },
    // CREATE A NEW BOOK
    createBook: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table + "(" + cols + ") VALUES ('" + vals + "')";
        console.log(queryString,  table, cols, vals);
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            cb(res);
        })
    },
    // MAKING BOOK COMPLETED
    bookCompleted: function (id, cb) {
        var queryString = "UPDATE books SET ? WHERE ?";
        connection.query(queryString, [{ completed: true }, { id: id }], function (err, res) {
            if (err) throw err;
            cb(res);
        })
    },
    // MAKING THE BOOK UNCOMPLETED - ON THE SHELF READY TO READ
    bookNotCompleted: function (id, cb) {
        var queryString = "UPDATE books SET ? WHERE ?";
        connection.query(queryString, [{ completed: false }, { id: id }], function (err, res) {
            if (err) throw err;
            cb(res);
        })
    },
    deleteBook: function (id, cb) {
        var queryString = "DELETE FROM books WHERE ?";
        connection.query(queryString, { id }, function (err, res) {
            if (err) throw err;
            cb(res);
        })
    }
}

module.exports = orm;