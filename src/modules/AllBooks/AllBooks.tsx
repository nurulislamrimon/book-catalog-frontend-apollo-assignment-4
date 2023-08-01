import { useState, useEffect } from "react";
import BookCard from "../../Components/BookCard";
import Filter from "../../Components/Filter";
import Loading from "../../Components/Loading";
import { IBook } from "../../interfaces/Book.interface";
import { useGetAllBooksQuery } from "../../redux/slices/book.slice";
import { useAppSelector } from "../../redux/hooks";

function AllBooks() {
  const { data, error: apiError, isLoading } = useGetAllBooksQuery(null);
  const { author: filteredAuthor, genre: filteredGenre } = useAppSelector(
    (state) => state.userSelectedFilter
  );
  const [genre, setGenre] = useState<string[]>([]);
  const [author, setAuthor] = useState<string[]>([]);
  const [books, setBooks] = useState<IBook[] | undefined | null>([]);
  // =======create genre and author list
  useEffect(() => {
    data?.data?.forEach((book) => {
      if (!genre?.includes(book?.genre)) {
        setGenre([book?.genre, ...genre]);
      }
      if (!author?.includes(book?.author)) {
        setAuthor([book?.author, ...author]);
      }
    });
  }, [data, genre, author]);
  // ===========create filtered books
  useEffect(() => {
    if (!filteredAuthor && !filteredGenre) {
      setBooks(data?.data);
    } else {
      setBooks(
        data?.data?.filter((book) => {
          if (filteredAuthor && !filteredGenre) {
            return filteredAuthor === book.author;
          } else if (!filteredAuthor && filteredGenre) {
            return filteredGenre === book.genre;
          } else {
            return (
              filteredGenre === book.genre && filteredAuthor === book.author
            );
          }
        })
      );
    }
  }, [filteredAuthor, data, filteredGenre]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = apiError;

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <p className="text-center">{error?.status}</p>;
  }

  return (
    <div className="p-5 pt-0">
      <div className="flex justify-between p-5">
        <h1 className="text-3xl pb-3 font-bold">Top 10 Books:</h1>
        <div className="flex space-x-10">
          <Filter label="author" options={author} />
          <Filter label="genre" options={genre} />
        </div>
      </div>

      <section className="grid grid-cols-3 gap-5">
        {books?.map((book: IBook) => (
          <BookCard key={book._id} book={book} />
        ))}
      </section>
    </div>
  );
}

export default AllBooks;
