import "./App.css";
import { Card } from "./Card/Card";
import { Welcome } from "./Welcome/Welcome";
import { Route, Routes } from "react-router";
import { NotFound } from "./NotFound/NotFound";
import { Header } from "./Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/card" element={<Card />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
