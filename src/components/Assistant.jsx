import { Paper, Typography } from "@mui/material";

function Assistant({ response }) {
  return (
    <Paper sx={{ p: 3, flex: 1 }}>
      <Typography variant="h6" gutterBottom>
        🤖 Asistent
      </Typography>

      <Typography sx={{ whiteSpace: "pre-wrap" }}>
        {response || "Aștept informații..."}
      </Typography>
    </Paper>
  );
}

export default Assistant;