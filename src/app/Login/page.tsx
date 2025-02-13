// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Navbar from "@/Component/Layout/Navbar";
// import Footer from "@/Component/Layout/Footer";

// const Login = () => {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();

//     try {
//       if (email.trim() === "" || password.trim() === "") {
//         setError("Email and password are required!");
//         return;
//       }

//       if (email === "admin@example.com" && password === "password123") {
//         setError(""); // Clear previous errors
//         router.push("/dashboard"); // Redirect user
//       } else {
//         setError("Invalid email or password!");
//       }
//     } catch (err) {
//       console.error("Error in handleSubmit:", err);
//       setError("Something went wrong. Please try again!");
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen flex items-center justify-center bg-[#ffffff]">
//         <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
//           <h2 className="text-white text-2xl font-bold text-center">Login</h2>

//           {error && <p className="text-red-500 text-center mt-2">{error}</p>}

//           <form className="mt-6" onSubmit={handleSubmit}>
//             {/* Email Field */}
//             <div>
//               <label className="text-white block mb-2">Email</label>
//               <input
//                 type="email"
//                 className="w-full p-2 rounded bg-gray-700 text-white outline-none"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>

//             {/* Password Field */}
//             <div className="mt-4">
//               <label className="text-white block mb-2">Password</label>
//               <input
//                 type="password"
//                 className="w-full p-2 rounded bg-gray-700 text-white outline-none"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="mt-6 w-full bg-[#D87D4A] text-white py-2 rounded hover:bg-orange-600 transition"
//             >
//               Login
//             </button>
//           </form>
//           <p className="text-white text-center mt-4">
//             Don't have an account?{" "}
//             <a href="/register" className="text-blue-400 hover:underline">
//               Sign Up
//             </a>
//           </p>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Login;

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/Component/Layout/Navbar";
import Footer from "@/Component/Layout/Footer";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      if (email.trim() === "" || password.trim() === "") {
        setError("Email and password are required!");
        return;
      }

      if (email === "admin@example.com" && password === "password123") {
        setError(""); // Clear previous errors
        router.push("/dashboard"); // Redirect user
      } else {
        setError("Invalid email or password!");
      }
    } catch (err) {
      console.error("Error in handleSubmit:", err);
      setError("Something went wrong. Please try again!");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-[#ffffff]">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-white text-2xl font-bold text-center">Login</h2>

          {error && <p className="text-red-500 text-center mt-2">{error}</p>}

          <form className="mt-6" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div>
              <label className="text-white block mb-2">Email</label>
              <input
                type="email"
                className="w-full p-2 rounded bg-gray-700 text-white outline-none"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Field */}
            <div className="mt-4">
              <label className="text-white block mb-2">Password</label>
              <input
                type="password"
                className="w-full p-2 rounded bg-gray-700 text-white outline-none"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-6 w-full bg-[#D87D4A] text-white py-2 rounded hover:bg-orange-600 transition"
            >
              Login
            </button>
          </form>
          <p className="text-white text-center mt-4">
            Don&apos;t have an account?{" "}
            <a href="/register" className="text-blue-400 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
