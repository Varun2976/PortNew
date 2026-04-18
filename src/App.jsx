import { BrowserRouter, Routes, Route } from "react-router-dom";
import PS5UI from "./PS5UI";
import Normal from "./Normal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PS5 FIRST */}
        <Route path="/" element={<PS5UI />} />

        {/* Normal portfolio */}
        <Route path="/normal" element={<Normal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;