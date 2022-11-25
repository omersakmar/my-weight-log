import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Logs from "./pages/logs/Logs";
import Navbar from "./components/navbar/Navbar";

function App() {
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  let location = useLocation();
  console.log(location);
  return (
    <>
      {location.pathname !== "/login" && <Navbar />}
      <Routes>
        <Route exact path="/">
          <Route path="login" element={<Login />} />
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="logs">
            <Route
              index
              element={
                <ProtectedRoute>
                  <Logs />
                </ProtectedRoute>
              }
            />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
