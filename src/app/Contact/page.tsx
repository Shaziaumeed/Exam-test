// "use client";
// import Footer from "@/Component/Layout/Footer";
// import Navbar from "@/Component/Layout/Navbar";
// import { useState } from "react";
// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const handleChange = (e: { target: { name: any; value: any; }; }) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   };
//   const handleSubmit = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     console.log("Form Data Submitted:", formData);
//   };
//   return (
//     <>
//     <Navbar/>
//     <div className="bg-[#101010] text-white py-16 px-4">
//       <div className="container mx-auto max-w-lg">
//         <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block mb-2">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
//               required
//             />
//           </div>
//           <div>
//             <label className="block mb-2">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
//               required
//             />
//           </div>
//           <div>
//             <label className="block mb-2">Message</label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
//               rows={4}
//               required
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-[#D87D4A] text-white py-2 rounded-lg hover:bg-[#b86a3a]"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//     <Footer/>
//     </>
//   );
// };

// export default Contact;


"use client";
import Footer from "@/Component/Layout/Footer";
import Navbar from "@/Component/Layout/Navbar";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#101010] text-white py-16 px-4">
        <div className="container mx-auto max-w-lg">
          <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                rows={4}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#D87D4A] text-white py-2 rounded-lg hover:bg-[#b86a3a]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;



