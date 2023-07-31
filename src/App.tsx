import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { setLoading, setUser } from "./redux/slices/user.slice";
import { useAppDispatch } from "./redux/hooks";
import auth from "../firebase.config";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (loggedUser) => {
      dispatch(setUser(loggedUser));
    });
    dispatch(setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <RouterProvider router={router} />;
};

export default App;
