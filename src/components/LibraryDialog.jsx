import { useRef } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  Stack,
  IconButton,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

function LibraryDialog({
  open,
  onClose,
  documents,
  addDocuments,
  removeDocument,
}) {
  const fileInputRef = useRef(null);

  const handleAddDocument = (event) => {
    const files = Array.from(event.target.files);

    const newDocuments = files.map((file) => ({
      id: crypto.randomUUID(),
      name: file.name,
      type: file.name.split(".").pop().toLowerCase(),
      file,
    }));

    addDocuments(newDocuments);

    event.target.value = "";
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>📚 Biblioteca</DialogTitle>

      <DialogContent dividers>
        <Stack spacing={2}>
          <Button
            variant="contained"
            onClick={() => fileInputRef.current.click()}
          >
            + Adaugă document
          </Button>

          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept=".pdf,.ppt,.pptx"
            hidden
            onChange={handleAddDocument}
          />

          {documents.length === 0 ? (
            <Typography color="text.secondary">
              Nu există documente în bibliotecă.
            </Typography>
          ) : (
            <List>
              {documents.map((doc) => (
                <ListItem
                  key={doc.id}
                  secondaryAction={
                    <IconButton
                      edge="end"
                      color="error"
                      onClick={() => removeDocument(doc.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary={doc.name}
                    secondary={doc.type.toUpperCase()}
                  />
                </ListItem>
              ))}
            </List>
          )}
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Închide</Button>
      </DialogActions>
    </Dialog>
  );
}

export default LibraryDialog;