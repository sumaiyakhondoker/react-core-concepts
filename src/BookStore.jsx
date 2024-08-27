import Book from "./book";

export default function BookStore({book}){
    // console.log(book);
    return(
        <div>
        {
            <Book book={book}></Book>
        }
        </div>
    )
}