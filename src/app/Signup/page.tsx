"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/Component/Layout/Navbar";
import Footer from "@/Component/Layout/Footer";

const Signup = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  // Correctly typed handleChange function
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Correctly typed handleSubmit function
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError(""); // Clear previous errors
    alert("Signup successful! Redirecting to login...");
    router.push("/login"); // Redirect to login page
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-[#ffffff]">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-white text-2xl font-bold text-center">Sign Up</h2>

          {error && <p className="text-red-500 text-center mt-2">{error}</p>}

          <form className="mt-6" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div>
              <label className="text-white block mb-2">Name</label>
              <input
                type="text"
                name="name"
                className="w-full p-2 rounded bg-gray-700 text-white outline-none"
                placeholder="Enter your name"
                value={user.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email Field */}
            <div className="mt-4">
              <label className="text-white block mb-2">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-2 rounded bg-gray-700 text-white outline-none"
                placeholder="Enter your email"
                value={user.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password Field */}
            <div className="mt-4">
              <label className="text-white block mb-2">Password</label>
              <input
                type="password"
                name="password"
                className="w-full p-2 rounded bg-gray-700 text-white outline-none"
                placeholder="Enter your password"
                value={user.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Confirm Password Field */}
            <div className="mt-4">
              <label className="text-white block mb-2">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                className="w-full p-2 rounded bg-gray-700 text-white outline-none"
                placeholder="Confirm your password"
                value={user.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-6 w-full bg-[#D87D4A] text-white py-2 rounded hover:bg-orange-600 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-white text-center mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-blue-400 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
