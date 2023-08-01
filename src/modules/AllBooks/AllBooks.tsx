import BookCard from "../../Components/BookCard";
import Loading from "../../Components/Loading";
import { IBook } from "../../interfaces/Book.interface";
import { useGetAllBooksQuery } from "../../redux/slices/book.slice";

function AllBooks() {
  const { data, error: apiError, isLoading } = useGetAllBooksQuery(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = apiError;

  if (isLoading) {
    return <Loading/>
  }
  if (error) {
    return <p className="text-center">{error?.status}</p>;
  }

  return (
    <div className="p-5 pt-0">
      <h1 className="text-3xl pb-3 font-bold">Top 10 Books:</h1>
      <section className="grid grid-cols-3 gap-5">
        {data?.data?.map((book: IBook) => (
          <BookCard key={book._id} book={book} />
        ))}
      </section>
    </div>
  );
}

export default AllBooks;
