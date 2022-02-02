import { Button, Dialog, DialogContent, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { UsersContext } from "../../context/UsersContext";

export const UserImageDialog = () => {
  const { user } = useContext(UsersContext);
  return (
    <Dialog open maxWidth="xs" fullWidth>
      <DialogContent>
        <Grid container>
          <Grid item xs={12}>
            <Typography>{`Selecciona la imagen de perfil para ${user.name}`}</Typography>
          </Grid>
          <Grid item xs={12}>
            <input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              style={{ display: "none" }}
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" component="span">
                Upload
              </Button>
            </label>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};
