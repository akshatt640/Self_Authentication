// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div className="min-h-screen bg-pink-100">
//       <nav className="flex justify-between p-5 shadow-md bg-gray-400">
//         <h1 className="text-2xl font-bold">
//           Library Management System
//         </h1>

//         <div className="flex gap-4">
//           <Link to="/login" className="bg-blue-300 rounded-lg px-3 hover:bg-blue-500">Login</Link>
//           <Link to="/register" className="bg-purple-300 rounded-lg px-3 hover:bg-purple-500">Register</Link>
//         </div>
//       </nav>

//       <div className="text-center mt-32">
//         <h1 className="text-5xl font-bold">
//           Welcome To Library Management System
//         </h1>

//         <p className="mt-5 text-gray-600">
//           Manage books, issue books and track records easily.
//         </p>

//         <div className="mt-8 flex justify-center gap-4">
//           <Link
//             to="/register"
//             className="bg-blue-500 text-white px-5 py-3 rounded-lg hover:bg-blue-600 hover:scale-101 border-none"
//           >
//             Get Started
//           </Link>

//           <Link
//             to="/login"
//             className="border px-5 py-3 rounded-lg bg-cyan-200 hover:bg-cyan-400 hover:scale-101 border-none"
//           >
//             Login
//           </Link>  
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
          <h1 className="text-2xl font-bold">
            📚 LMS
          </h1>

         

          <div className="flex gap-3">
            <Link
              to="/login"
              className="border border-white px-5 py-2 rounded-lg hover:bg-white hover:text-black"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-purple-600 px-5 py-2 rounded-lg hover:bg-purple-700"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-6xl font-bold leading-tight">
              Smart Library
              <br />
              Management
              <span className="text-purple-500">
                {" "}System
              </span>
            </h1>

            <p className="mt-6 text-gray-100 text-lg">
              A smart and efficient way to manage books,
              students, issue and return records.
            </p>

            <div className="flex gap-4 mt-8">
              <Link
                to="/register"
                className="bg-purple-600 px-8 py-4 rounded-xl font-semibold"
              >
                Get Started
              </Link>

              <Link
                to="/login"
                className="border border-white px-8 py-4 rounded-xl"
              >
                Login Now
              </Link>
            </div>
          </div>

          <div>
            <img
              src="https://alvcoaching.com/wp-content/uploads/2020/04/10-motivational-books-to-read-scaled.jpg"
              alt="library"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
     <marquee behavior="alternative" direction="left">Internet Must be connected </marquee>

      {/* Footer */}
      <footer className="bg-[#07152f] text-white py-10 rounded-lg">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold">
            Library Management System
          </h2>

          <p className="text-gray-400 mt-3">
            Smart solution to manage books,
            students and library operations.
          </p>

          <p className="mt-6 text-gray-500">
            © 2026 Library Management System.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;