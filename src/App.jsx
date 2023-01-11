import { Playlist, Artist, Music, Load } from "./pages";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
function App() {
  const [second, setSecond] = useState(false);
  const [params, setParams] = useState({
    width: "",
    height: "",
  });
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <Load
                params={params}
                setParams={setParams}
                second={second}
                setSecond={setSecond}
              />
            }
          />
          <Route
            path="/music"
            element={
              <Music second={second} setSecond={setSecond} params={params} />
            }
          />
          <Route path="/playlists/:id" element={<Playlist />} />
          <Route path="/artist/:id" element={<Artist />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
