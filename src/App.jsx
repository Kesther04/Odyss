import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import BookingsPage from "./pages/BookingsPage";
import VehiclesPage from "./pages/VehiclesPage";
import RoutesPage from "./pages/RoutesPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* for Setting Existing Routes */}
      <Route path="/" element={<Home/>} />
      <Route path="/dashboard/bookings" element={<BookingsPage/>} />
      <Route path="/dashboard/vehicles" element={<VehiclesPage/>} />
      <Route path="/dashboard/routes" element={<RoutesPage/>} />   

      {/* For Catching All Non-Existing Routes */}
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App
