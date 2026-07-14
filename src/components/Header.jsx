import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";

function Header({ onOpenLibrary }) {
  return (
    <AppBar
      position="static"
      elevation={1}
      sx={{
        backgroundColor: "#ffffff",
        color: "#222",
        borderRadius: 2,
        mb: 3,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h5" fontWeight="bold">
          ConsultPilot
        </Typography>

        <Button
          variant="contained"
          startIcon={<MenuBookIcon />}
          onClick={onOpenLibrary}
        >
          Biblioteca
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;