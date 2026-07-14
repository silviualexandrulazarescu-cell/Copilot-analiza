import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Library from "./components/Library";

function App() {
  const [libraryOpen, setLibraryOpen] = useState(false);

  return (
    <div className="app">
      <Header onOpenLibrary={() => setLibraryOpen(true)} />

      {libraryOpen && (
        <Library onClose={() => setLibraryOpen(false)} />
      )}

      <div className="card">
        <h2>📝 Discuție cu clientul</h2>

        <textarea placeholder="Scrie aici tot ce afli în timpul întâlnirii..." />

        <button>Analizează</button>
      </div>

      <div className="card">
        <h2>🤖 Asistent</h2>

        <p>Aștept informații...</p>
      </div>
    </div>
  );
}

export default App;