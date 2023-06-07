import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PetDetail from "./components/PetDetail";
import PetList from "./components/PetList";
import { Route, Routes } from "react-router-dom";
import { getPets } from "./api/pets";
function App() {
  return (
    <div className="font-mono">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PetList" element={<PetList />} />
        <Route path="/pets/:petId" element={<PetDetail />} />
      </Routes>
    </div>
  );
}

export default App;
