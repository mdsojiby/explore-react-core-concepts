import Books from "./Books";

 export default function BooksStore({books}){
    return(
        <div>
        <h3>Books: {books.length}</h3>

        {
            books.map(book=> <Books book={book}></Books>)
        }

        </div>
    )
 }