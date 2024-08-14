import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BlogManagement } from "./components/AdminDashboard/BlogManagement";
import { Bookings } from "./components/AdminDashboard/Bookings";
import { EventGalleryManagement } from "./components/AdminDashboard/EventGalleryManagement";
import { Layout } from "./components/AdminDashboard/Layout";
import { Packages } from "./components/AdminDashboard/Packages";
import { Teams } from "./components/AdminDashboard/Teams";
import { EventGallery } from "./components/EventGallery";
import { AboutUs } from "./pages/AboutUs";
import { Blog } from "./pages/Blog";
import { Contactpage } from "./pages/Contactpage";
import { EventBooking } from "./pages/EventBooking";
import { Gallery } from "./pages/Gallery";
import { Homepage } from "./pages/Homepage";
import { Shop } from "./pages/Shop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/booking" element={<EventBooking />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:id" element={<EventGallery />} />
        <Route path="/shop" element={<Shop />} />
        {/* Admin Dashboard Routes */}
        <Route path="/admin" element={<Layout />}>
          <Route path="teams" element={<Teams />} />
          <Route path="packages" element={<Packages />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="blog-management" element={<BlogManagement />} />
          <Route
            path="event-gallery-management"
            element={<EventGalleryManagement />}
          />
          {/* Add more admin routes as needed */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
