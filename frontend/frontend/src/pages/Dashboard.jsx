

import { useEffect, useState } from "react";
import api from "../servies/bookApi.js";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    fetchBooks();
  }, []);
  
  const fetchBooks = async ()=>{
     try{
         const res = await api.get('/books');
         console.log(res.data);
         setBooks(res.data.books)
     }catch(err){
       console.log("book fetch nhi hoo raha hai"+err)
     }
  }
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex items-center justify-between  m-8">
        <p className="text-3xl font-bold ">
          Student Dashboard
        </p>
        <p className="text-3xl font-bold">
          Welcome  {user?.name} 👋
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">
            Total Books
          </h2>
          <p className="text-3xl font-bold text-blue-600">
            {books.length}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">
            Available Books
          </h2>
          <p className="text-3xl font-bold text-green-600">
            {books.filter(book => book.quantity > 0).length}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">
            Categories
          </h2>
          <p className="text-3xl font-bold text-purple-600">
            {
              [...new Set(
                books.map(book => book.category)
              )].length
            }
          </p>
        </div>
      </div>

      {/* Books Table */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold mb-4">
          Library Books
        </h2>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-3">Title</th>
              <th className="text-left p-3">Author</th>
              <th className="text-left p-3">Category</th>
              <th className="text-left p-3">Quantity</th>
            </tr>
          </thead>

          <tbody>
            {books.map((book) => (
              <tr
                key={book._id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-3">{book.title}</td>
                <td className="p-3">{book.author}</td>
                <td className="p-3">{book.category}</td>
                <td className="p-3">{book.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};



export default Dashboard;