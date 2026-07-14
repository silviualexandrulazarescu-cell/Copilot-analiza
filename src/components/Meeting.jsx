import { Paper, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";

function Meeting({ onAnalyze }) {
  const [notes, setNotes] = useState("");

  return (
    <Paper sx={{ p: 3, flex: 1 }}>
      <Typography variant="h6" gutterBottom>
        📝 Discuție cu clientul
      </Typography>

      <TextField
        multiline
        rows={18}
        fullWidth
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Scrie aici tot ce afli despre client..."
      />

      <Button
        variant="contained"
        sx={{ mt: 2 }}
        onClick={() => onAnalyze(notes)}
      >
        Analizează
      </Button>
    </Paper>
  );
}

export default Meeting;