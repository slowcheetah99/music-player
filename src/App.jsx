import { Playlist, Artist, Music } from "./pages";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Music />} />
        <Route path="/playlists/:id" element={<Playlist />} />
        <Route path="/artist/:id" element={<Artist />} />
      </Routes>
    </div>
  );
}

export default App;
