import { useState } from "react";
import Input from "../../Components/Input";
import validator from "validator";
import { usePostABookMutation } from "../../redux/slices/book.slice";

const AddNewBook = () => {
  const [postABook, { isLoading, isSuccess, isError }] = usePostABookMutation();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    const title = e.target.title.value;
    const author = e.target.author.value;
    const genre = e.target.genre.value;
    const publicationDate = e.target.publicationDate.value;

    if (!title || !author || !genre || !publicationDate) {
      setError("Please fill up the form!");
    } else if (!validator.isDate(publicationDate)) {
      setError("Please provide a valid Publication date!");
    } else {
      postABook({ title, author, genre, publicationDate });
    }
  };
  const handleInput = () => {
    setError("");
  };

  if (isLoading) {
    return <p className="text-center">Loading...</p>;
  }
  if (isError) {
    return <p>An error occured!</p>;
  }

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        onInput={handleInput}
        className="grid  my-10 rounded-lg w-3/4 mx-auto"
      >
        <h2 className="text-center font-bold text-3xl">Add New Book</h2>
        <div className="grid grid-cols-2 gap-5">
          <Input name="title" title="Title" placeholder="Book title" />
          <Input name="author" title="Author" placeholder="Jhon Doe" />
          <Input name="genre" title="Genre" placeholder="Programming" />
          <Input
            name="publicationDate"
            title="Date of Publication"
            placeholder="2023/05/06"
          />
        </div>
        {error && <p className="mt-2 text-red-600 text-center">{error}</p>}
        <button className="btn w-2/4 mx-auto btn-neutral mt-5">Submit</button>
      </form>
    </div>
  );
};

export default AddNewBook;
