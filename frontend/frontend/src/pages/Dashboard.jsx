
// function Dashboard() {
//   const user = JSON.parse(localStorage.getItem("user"));

//   return (
//     <div>
//       <h1>Dashboard</h1>

//       <h2>
//         Welcome {user?.name}
//       </h2>
//     </div>
//   );
// }

// export default Dashboard;
import { useEffect } from "react";
import api from '../servies/api.js'
import {
  LayoutDashboard,
  Users,
  BookOpen,
  Settings,
  Bell,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
function Dashboard() {


  const user = JSON.parse(localStorage.getItem("user"));
  
  const navigate = useNavigate();

  const handleLogout = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('user')
    navigate('/login');
  }

  useEffect(() => {
    const getProfile = async () => {

      const token =
        localStorage.getItem("token");

      try {
        const res = await api.get(
          "/profile",
          {
            headers: {
              Authorization: token,
            },
          }
        );

        console.log(res.data);

      } catch (error) {
        console.log(error);
      }
    };

    getProfile();

  }, []);
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white hidden md:flex flex-col">
        <div className="p-6 border-b border-slate-700">
          <h1 className="text-2xl font-bold">My Dashboard</h1>
        </div>

        <nav className="flex-1 p-4 space-y-3">
          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-slate-800 transition">
            <LayoutDashboard size={20} />
            Dashboard
          </button>

          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-slate-800 transition">
            <Users size={20} />
            Users
          </button>

          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-slate-800 transition">
            <BookOpen size={20} />
            Projects
          </button>

          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-slate-800 transition">
            <Settings size={20} />
            Settings
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Navbar */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Dashboard
          </h1>

          <div className="flex items-center gap-4">
            
            <Bell className="text-gray-600 cursor-pointer" />

            <div className="flex items-center gap-2">
              <img
                src={`https://ui-avatars.com/api/?name=${user?.name}`}
                alt="profile"
                className="w-10 h-10 rounded-full"
              />
              <span className="font-medium">{user?.name}</span>
               <button onClick={handleLogout} className="bg-red-300  hover:bg-red-400 text-white px-5 py-2 rounded-lg transition ">Logout</button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Welcome Card */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold">
              Welcome Back, {user?.name} 👋
            </h2>
            <p className="mt-2 text-blue-100">
              Manage your projects, users and settings from one place.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
              <h3 className="text-gray-500">Total Users</h3>
              <p className="text-3xl font-bold mt-2">120</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
              <h3 className="text-gray-500">Projects</h3>
              <p className="text-3xl font-bold mt-2">25</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
              <h3 className="text-gray-500">Tasks</h3>
              <p className="text-3xl font-bold mt-2">78</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
              <h3 className="text-gray-500">Revenue</h3>
              <p className="text-3xl font-bold mt-2">$12,500</p>
            </div>
          </div>

          {/* Profile Card */}
          <div className="bg-white rounded-xl shadow mt-8 p-6">
            <h2 className="text-xl font-semibold mb-4">
              User Profile
            </h2>

            <div className="flex items-center gap-5">
              <img
                src={`https://ui-avatars.com/api/?name=${user?.name}`}
                alt="profile"
                className="w-20 h-20 rounded-full"
              />

              <div>
                <h3 className="text-lg font-bold">
                  {user?.name}
                </h3>

                <p className="text-gray-500">
                  {user?.email}
                </p>

                <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;