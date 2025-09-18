import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HotelBooking from "./pages/HotelBooking";
import InvoiceBuilder from "./pages/InvoiceBuilder";
import ExpenseTracker from "./pages/SmartExpenseTracker";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/hotel-booking" element={<HotelBooking />} />
      <Route path="/project/invoice-builder" element={<InvoiceBuilder />} />
      <Route path="/project/expense-tracker" element={<ExpenseTracker />} />
    </Routes>
  );
}
