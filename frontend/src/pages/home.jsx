import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // التحقق من تسجيل الدخول عند تحميل الصفحة
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/auth/profile", {
          withCredentials: true,
        });
        if (res.status === 200) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  // دالة تسجيل الخروج
  const handleLogout = async () => {
    try {
      // إرسال طلب إلى الخادم لحذف الكوكيز
      await axios.post(
        "http://localhost:8000/api/auth/logout",
        {},
        { withCredentials: true }
      );

      // إلغاء المصادقة
      setIsAuthenticated(false);

      // إعادة التوجيه إلى صفحة تسجيل الدخول
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
        <h1 className="text-3xl font-bold mb-6">Welcome to Home Page</h1>

        {isAuthenticated ? (
          <>
            <button
              onClick={() => navigate("/profile")}
              className="w-full py-3 mb-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition duration-300"
            >
              Profile
            </button>
            <button
              onClick={handleLogout}
              className="w-full py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-300"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => navigate("/login")}
              className="w-full py-3 mb-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="w-full py-3 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-700 transition duration-300"
            >
              Register
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
