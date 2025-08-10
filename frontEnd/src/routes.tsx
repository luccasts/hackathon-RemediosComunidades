import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<Admin />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
