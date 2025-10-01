import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tempo from "./pages/tempo";


function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tempo />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
