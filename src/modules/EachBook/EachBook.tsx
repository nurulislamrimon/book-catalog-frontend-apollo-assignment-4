import { useParams } from "react-router-dom";
import { useGetABookQuery } from "../../redux/slices/book.slice";
import bookplaceholder from "/images/bookplaceholder.jpg";
import RatingStar from "../../Components/RatingStar";
import Loading from "../../Components/Loading";

const EachBook = () => {
  const { id } = useParams();

  const { data, error: apiError, isLoading } = useGetABookQuery(id);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = apiError;

  if (isLoading) {
    return <Loading/>
  }
  if (error) {
    return <p className="text-center">{error?.status}</p>;
  }
  const book = data?.data;

  return (
    <div className="grid grid-cols-2 w-3/4 mx-auto p-20">
      <div className=" space-y-5">
        <h2 className="card-title text-3xl">{book?.title}</h2>
        <p className="text-xl">
          <span className="font-bold">Author:</span> {book?.author}
        </p>
        <p className="text-xl">
          <span className="font-bold">Genre:</span> {book?.genre}
        </p>
        <p className="text-xl">
          <span className="font-bold">Publication date: </span>
          {new Date(book?.publicationDate as string).toLocaleDateString()}
        </p>
      </div>
      <div>
        <img src={bookplaceholder} alt="" className="mb-3" />
        <RatingStar rating={4.2} />
      </div>
    </div>
  );
};

export default EachBook;
