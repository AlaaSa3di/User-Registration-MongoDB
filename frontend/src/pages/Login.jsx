import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [user, setUser] = useState({ email: "", password: "" });
    const [error, setError] = useState(""); // لتخزين رسالة الخطأ إن وجدت
    const navigate = useNavigate(); // دالة التنقل

    const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // إعادة تعيين الخطأ في كل محاولة
        try {
            const response = await axios.post("http://localhost:8000/api/auth/login", user, { withCredentials: true });
            alert("Login successful!");
            navigate("/"); // إعادة التوجيه بعد تسجيل الدخول بنجاح
        } catch (error) {
            setError("Login failed! Please check your credentials.");
            console.error("Login error:", error);
        }
    };

    const handleRegisterRedirect = () => {
        navigate("/register"); // التوجيه إلى صفحة التسجيل عند الضغط على الزر
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                {error && <p className="text-red-500 text-center">{error}</p>} {/* عرض الخطأ إن وجد */}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            onChange={handleChange} 
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            onChange={handleChange} 
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
                        Login
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <p className="text-sm">
                        You don't have an account?{" "}
                        <button 
                            onClick={handleRegisterRedirect} 
                            className="text-blue-600 hover:underline">
                            Create account
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
