import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/character/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
