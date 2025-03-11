import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import OrdersPage from "./pages/OrdersPage";
import CreateOrderPage from "./pages/CreateOrderPage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="font-sans antialiased min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/create-order" element={<CreateOrderPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
