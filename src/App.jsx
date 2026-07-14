import { useState } from "react";
import { Box } from "@mui/material";

import "./App.css";

import Header from "./components/Header";
import LibraryDialog from "./components/LibraryDialog";
import Meeting from "./components/Meeting";
import Assistant from "./components/Assistant";

function App() {
  const [libraryOpen, setLibraryOpen] = useState(false);
  const [response, setResponse] = useState("");
  const [documents, setDocuments] = useState([]);

  const addDocuments = (newDocuments) => {
    setDocuments((prev) => [...prev, ...newDocuments]);
  };

  const removeDocument = (id) => {
    setDocuments((prev) => prev.filter((doc) => doc.id !== id));
  };

  const handleAnalyze = (notes) => {
    if (!notes.trim()) {
      setResponse("Te rog introdu informații despre client.");
      return;
    }

    setResponse(`🤖 Recomandări

❓ Întrebări recomandate

1. Ce economii aveți în prezent?
2. Care este obiectivul financiar principal?
3. Ce s-ar întâmpla dacă unul dintre venituri ar dispărea?

⚠️ Informații lipsă

• Venitul partenerului
• Cheltuieli lunare
• Fond de urgență`);
  };

  return (
    <Box sx={{ maxWidth: 1400, mx: "auto", p: 3 }}>
      <Header onOpenLibrary={() => setLibraryOpen(true)} />

      <LibraryDialog
        open={libraryOpen}
        onClose={() => setLibraryOpen(false)}
        documents={documents}
        addDocuments={addDocuments}
        removeDocument={removeDocument}
      />

      <Box
        sx={{
          display: "flex",
          gap: 3,
          mt: 3,
          alignItems: "stretch",
        }}
      >
        <Meeting onAnalyze={handleAnalyze} />
        <Assistant response={response} />
      </Box>
    </Box>
  );
}

export default App;