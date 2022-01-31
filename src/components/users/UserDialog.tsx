import { Dialog, DialogContent, Grid } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { User } from "../../interfaces/user.interfaces";
import { UserFormItem } from "./UserFormItem";

export const UserDialog = () => {
  const [user, setUser] = useState<User>({
    name: "",
    image: "",
    rfc: "",
    birthdate: "",
  });
  const onChangeUser = (e: ChangeEvent<{ name?: string; value: unknown }>) => {
    console.log(e.target.value);
    const { value, name } = e.target;

    setUser((prev) => ({ ...prev, [name!]: value }));
  };

  return (
    <Dialog open onClose={() => {}} maxWidth="sm" fullWidth>
      <DialogContent>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <UserFormItem
                label="Nombre"
                name="name"
                onChange={onChangeUser}
                value={user?.name}
              />
            </Grid>
            <Grid item xs={12}>
              <UserFormItem
                label="Apellido paterno"
                name="last_name"
                onChange={onChangeUser}
                value={user?.name}
              />
            </Grid>
            <Grid item xs={12}>
              <UserFormItem
                label="Apellido materno"
                name="sur_name"
                onChange={onChangeUser}
                value={user?.name}
              />
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <div>
        <pre>{JSON.stringify(user)}</pre>
      </div>
    </Dialog>
  );
};
