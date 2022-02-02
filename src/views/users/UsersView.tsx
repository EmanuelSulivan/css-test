import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect } from "react";
import { DeleteUserDialog } from "../../components/users/DeleteUserDialog";
import { UserDialog } from "../../components/users/UserDialog";
import { UsersTable } from "../../components/users/UsersTable";
import { UsersContext } from "../../context/UsersContext";

export const UsersView = () => {
  const { getUsers } = useContext(UsersContext);

  useEffect(() => {
    getUsers("/user");
  }, []);

  return (
    <Box sx={{ pt: 2, pb: 5, px: 5 }}>
      <Grid container spacing={2} columns={16} justifyContent="center">
        <Grid container item xs={16} justifyContent="flex-end">
          <Button>Nuevo usuario</Button>
        </Grid>
        <Grid container item xs={15} justifyContent="flex-end">
          <UsersTable />
        </Grid>
      </Grid>
      <UserDialog />
      <DeleteUserDialog />
    </Box>
  );
};
