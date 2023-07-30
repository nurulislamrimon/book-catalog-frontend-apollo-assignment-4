import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import auth from "../../../firebase.config";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!email || !password) {
      return setError("Please enter email and password!");
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleInput = () => {
    setError("");
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <form
        onSubmit={handleFormSubmit}
        onInput={handleInput}
        className="grid border border-red-900 p-5 rounded-lg w-72"
      >
        <h2 className="text-center font-bold text-3xl">Login</h2>
        <div className="form-container">
          <label className="label">
            <span className="label-text">Email: </span>
          </label>
          <input
            name="email"
            type="text"
            placeholder="example@gmail.com"
            className="form-input"
          />
        </div>
        <div className="form-container mb-5">
          <label className="label">
            <span className="label-text">Password: </span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="********"
            className="form-input"
          />
        </div>
        {error && <p className="mb-2 text-red-600 text-center">{error}</p>}
        <button className="btn btn-primary">Submit</button>
        <small className="mt-2 text-center">
          Already registered? Go to{" "}
          <Link to="/signup" className="text-blue-500">
            Signup
          </Link>
        </small>
      </form>
    </div>
  );
};

export default Login;
