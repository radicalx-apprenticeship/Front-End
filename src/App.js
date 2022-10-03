import "./styles/global.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/Navigation/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Why private route? - so only signed users can access this page!(See PrivateRoute.js for more info) */}
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Dashboard />} />
            {/* TODO: Add other private routes here */}
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
