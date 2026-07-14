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

import { extractPdfText } from "../services/documentService";

function LibraryDialog({
  open,
  onClose,
  documents,
  addDocuments,
  removeDocument,
}) {
  const fileInputRef = useRef(null);

const handleAddDocument = async (event) => {
  const files = Array.from(event.target.files);

  console.log("Fișiere selectate:", files);

  const newDocuments = [];

  for (const file of files) {
    console.log("Procesez:", file.name);

    let content = "";

    if (file.type === "application/pdf") {
      console.log("Încep citirea PDF...");
      content = await extractPdfText(file);
      console.log(
        "Text extras:",
        content.substring(0, 200)
      );
    }

    newDocuments.push({
      id: crypto.randomUUID(),
      name: file.name,
      type: file.name.split(".").pop().toLowerCase(),
      content,
      status: content ? "pregatit" : "nou",
      uploadedAt: new Date().toISOString(),
    });
  }

  console.log("Documente finale:", newDocuments);

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
                    secondary={
                      <>
                        {doc.type.toUpperCase()} -{" "}
                        {doc.status === "pregatit"
                          ? "🟢 Pregătit"
                          : "🟡 Neprocesat"}
                      </>
                    }
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