var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);    
} else {
    connection = mysql.createConnection({
        root: 3306,
        host: "localhost",
        user: "root",
        password: "Superhero500",
        database: "books_database"
    });
};

connection.connect(function (err) {
    if (err) throw err;

    console.log("Connected to DB with ID: " + connection.threadId)
});

module.exports = connection; 