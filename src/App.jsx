import { BrowserRouter, Routes, Route } from "react-router-dom";
import PS5UI from "./PS5UI";
import Normal from "./Normal";
import Selection from "./Selection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Selection />} />
      </Routes>
      <Routes>
        {/* PS5 FIRST */}
        <Route path="/ps5" element={<PS5UI />} />

        {/* Normal portfolio */}
        <Route path="/normal" element={<Normal />} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;