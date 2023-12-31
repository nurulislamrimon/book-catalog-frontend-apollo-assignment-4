import { useNavigate } from "react-router-dom";
import { IBook } from "../interfaces/Book.interface";

interface BookCardProps {
  book: IBook;
}
const BookCard = ({ book }: BookCardProps) => {
  const { _id, title, author, genre, publicationDate } = book;
  const navigate = useNavigate();

  return (
    <div
      className="card w-96 bg-base-300 text-black"
      onClick={() => navigate(`/books/${_id}`)}
    >
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Author: {author}</p>
        <p>Genre: {genre}</p>
        <p>
          Publication Date: {new Date(publicationDate).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
