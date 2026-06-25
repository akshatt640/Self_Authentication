// import { useState } from "react";
// import api from "../servies/api.js";
// import { useNavigate } from "react-router-dom";
// function Register() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   console.log("Form Data:", formData);

//   try {
//     const res = await api.post("/register", formData);

//     console.log(res.data);
//     alert("User Registered Successfully");
    
//     localStorage.setItem(
//       'user', JSON.stringify(res.data.user)
//     );
//     navigate('/dashboard')

//   }catch (error) {
//   console.log("Full Error:", error.response?.data);
//   alert(error.response?.data?.message);
// }
// };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         value={formData.name}
//         placeholder="Enter Name"
//         onChange={handleChange}
//       />

//       <input
//         type="email"
//         name="email"
//         value={formData.email}
//         placeholder="Enter Email"
//         onChange={handleChange}
//       />

//       <input
//         type="password"
//         name="password"
//         value={formData.password}
//         placeholder="Enter Password"
//         onChange={handleChange} 
//       />

//       <button type="submit">
//         Register
//       </button>
//     </form>
//   );
// }

// export default Register;

import { useState } from "react";
import api from "../servies/api.js";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: 'student',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/register", formData);

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("User Registered Successfully");
      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700 px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl p-8">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">
            Create Account
          </h1>
          <p className="text-gray-200 mt-2">
            Join us and start your journey today
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-white mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Enter your name"
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none border border-white/20 focus:border-white focus:ring-2 focus:ring-white"
            />
          </div>

          <div>
            <label className="block text-white mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none border border-white/20 focus:border-white focus:ring-2 focus:ring-white"
            />
          </div>

          <div>
            <label className="block text-white mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              placeholder="Enter your password"
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none border border-white/20 focus:border-white focus:ring-2 focus:ring-white"
            />
          </div>

         <div>
  <label className="block text-white mb-2">
    Role
  </label>

  <select
    name="role"
    value={formData.role}
    onChange={handleChange}
    className="w-full px-4 py-3 rounded-xl bg-white/20 text-white outline-none border border-white/20 focus:border-white focus:ring-2 focus:ring-white"
  >
    <option value="student" className="text-black">
      Student
    </option>

    <option value="admin" className="text-black">
      Admin
    </option>
  </select>
</div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-white text-indigo-700 font-semibold hover:bg-gray-100 transition duration-300"
          >
            Create Account
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-gray-200">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-white hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;