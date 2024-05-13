import React, { useEffect } from 'react';
// import sqlite3 from 'sqlite3';

const TestSQLite = () => {
  const sqlite3 = require('sqlite3').verbose();
  console.log(sqlite3);
  useEffect(() => {
    // const db = new sqlite3.Database(':memory:');

    const db = new sqlite3.Database(':memory:', (err) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log('Connected to the in-memory SQLite database.');
      }
    });

    console.log(db);


    // db.serialize(() => {
    //   db.run(`CREATE TABLE bookshelves (
    //     id INTEGER PRIMARY KEY AUTOINCREMENT,
    //     user_id INTEGER NOT NULL,
    //     book_id TEXT NOT NULL
    //   )`);
    // });




    // const saveBookshelf = (userId, bookId) => {
    //   return new Promise((resolve, reject) => {
    //     db.run(`INSERT INTO bookshelves (user_id, book_id) VALUES (?,?)`, [userId, bookId], function (err) {
    //       if (err) {
    //         reject(err);
    //       } else {
    //         resolve(this.lastID);
    //       }
    //     });
    //   });
    // };

    // saveBookshelf(1, 'book1')
    //  .then(bookshelfId => {
    //     console.log(`Successfully saved bookshelf with ID: ${bookshelfId}`);
    //   })
    //  .catch(err => {
    //     console.error('Error saving bookshelf:', err);
    //   });
  }, []);

  return null;
};

export default TestSQLite;