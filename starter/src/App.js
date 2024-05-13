import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import SearchBooks from "./SearchBooks";
import BookDetail from "./BookDetail";
// import TestSQLite from "./TestSQLite";

function App() {

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/search" element={<SearchBooks />} />
        <Route path="/book/:bookId" element={<BookDetail />} />
        {/* <Route path="/test" element={<TestSQLite/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
