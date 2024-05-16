import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";

const Main = () => {
    const [books, setBooks] = useState([]);

    const [countBookShelfChanged, setCountBookShelfChanged] = useState(0);

    const currentUsername = localStorage.getItem('currentUsername');  
    const token = localStorage.getItem(`token-${currentUsername}`);
    useEffect(() => {
        const getBooks = async () => {
            const books = await BooksAPI.getAll(token);
            console.log("books",books);
            setBooks(books);
        };
        getBooks()
    }, [countBookShelfChanged]); // eslint-disable-line react-hooks/exhaustive-deps

    const changeCountBookShelf = (value) => {
        setCountBookShelfChanged(value);
    };

    const currentlyReadingBooks = books.filter(book => book.shelf === 'currentlyReading');
    const wantToReadBooks = books.filter(book => book.shelf === 'wantToRead');
    const readBooks = books.filter(book => book.shelf === 'read');

    return (<div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <BookShelf books={currentlyReadingBooks} onShelfChanged={changeCountBookShelf} countChanged={countBookShelfChanged} />
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <BookShelf books={wantToReadBooks} onShelfChanged={changeCountBookShelf} countChanged={countBookShelfChanged} />
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <BookShelf books={readBooks} onShelfChanged={changeCountBookShelf} countChanged={countBookShelfChanged} />
                </div>
            </div>
        </div>
        <div className="open-search">
            <Link to={"/search"} state={books} >Add a book</Link>
        </div>
    </div>);
};

export default Main;