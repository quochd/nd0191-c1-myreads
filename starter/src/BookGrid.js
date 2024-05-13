import * as BooksAPI from "./BooksAPI";
import { useNavigate} from "react-router-dom";

const BookGrid = ({ books, isSearch, countChanged, onShelfChanged ,searchInput}) => {
    let navigate = useNavigate();
    const handleOnchange = (book, value) => {
        BooksAPI.update(book, value).then(() => {
            if (countChanged !== undefined) {
                onShelfChanged(countChanged + 1);
            }
        }).catch((error) => {
            console.error("Error updating book shelf:", error);
        });
    };

    const moveToBookDetail = (e,book) => {
        e.stopPropagation();
        navigate(`/book/${book.id}`, { state: { book  } })
    };

    return (<ol className="books-grid">
        {books.map((book) =>
            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                        <div
                            className="book-cover"
                            onClick={(e)=>moveToBookDetail(e,book)}
                            style={{
                                width: 128,
                                height: 193,
                                backgroundImage:
                                    `url(${book.imageLinks ? book.imageLinks.thumbnail : ''})`,
                            }}
                        ></div>
                        <div className="book-shelf-changer">
                            <select value={book.shelf ? book.shelf : 'none'} onChange={(e) => handleOnchange(book, e.target.value)}>
                                <option value="default" disabled>
                                    {isSearch === true ? 'Add' : 'Move'}  to...
                                </option>
                                <option value="currentlyReading">
                                    Currently Reading
                                </option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        )}
    </ol>);
};

export default BookGrid;