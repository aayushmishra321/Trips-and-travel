import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import Explore from './components/Explore/Explore';
import BookingForm from './components/BookingPage/BookingForm';
import FlightBookingPage from './components/BookingPage/FlightBookingForm';
import RailwayBookingPage from './components/BookingPage/RailwayBookingForm';
// import RailwayBooking from './components/BookingPage/RailwayBooking';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "services",
    element: <Services />,
  },
  {
    path: "explore",
    element: <Explore />,
  },
  {
    path: "/booking",
    element: <BookingForm />,
  },
  {
    path: "/flight-booking",
    element: <FlightBookingPage />,
  },
  {
    path: "/railway-booking",
    element: <RailwayBookingPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)