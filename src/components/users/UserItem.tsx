import { Avatar, Button, IconButton, TableCell, TableRow } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { User } from "../../interfaces/user.interfaces";

interface Props {
  user: User;
  handleOpenDeleteUser: (id: number) => void;
}

export const UserItem = ({ user, handleOpenDeleteUser }: Props) => {
  return (
    <TableRow key={`row-${user.id}`}>
      <TableCell>
        <Avatar src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg" />
      </TableCell>
      <TableCell component="th" scope="row">
        {user.profilePicture}
      </TableCell>
      <TableCell component="th" scope="row">
        <Button>{user.name}</Button>
      </TableCell>
      <TableCell align="right">{user.birthday}</TableCell>
      <TableCell align="right">{user.rfc}</TableCell>
      <TableCell style={{ margin: 0, padding: 0 }}>
        <IconButton>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => handleOpenDeleteUser(user.id!)}>
          <ClearIcon />
        </IconButton>
      </TableCell>
      <TableCell style={{ margin: 0, padding: 0 }}>
        <IconButton>
          <FileUploadIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
