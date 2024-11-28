// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Navbar from './components/Navbar';
// import Favourites from './pages/Favourites';
// import Details from './pages/Details';
// import { BrowserRouter } from 'react-router-dom'; // Corrected the import for BrowserRouter
// import GlobalState from './components/context'; // Use GlobalState, not GlobalContext


// export default function App() {
//   return (

//       <GlobalState> {/* Use GlobalState to provide the context */}
//         <div className="min-h-screen px-6 bg-white text-slate-900 text-lg">
//           {/* Navbar Component */}
//           <Navbar />
//           {/* Routes Configuration */}
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/favourites" element={<Favourites />} />
//             <Route path="/recipe-item/:id" element={<Details />} />
//           </Routes>

//         </div>
//       </GlobalState>

//   );
// }
