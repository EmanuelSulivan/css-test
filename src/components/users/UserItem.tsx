import {
  Avatar,
  Badge,
  Button,
  IconButton,
  TableCell,
  TableRow,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { User } from "../../interfaces/user.interfaces";
import { imagesURL } from "../../api/backendApi";
import { UserBadge } from "./UserBadge";

interface Props {
  user: User;
  handleOpenDeleteUser: (id: number) => void;
  handleShowUpdateUser: (id: number) => void;
  hanbleOpenImageModal: (id: number) => void;
}

export const UserItem = ({
  user,
  handleOpenDeleteUser,
  handleShowUpdateUser,
  hanbleOpenImageModal,
}: Props) => {
  const imagePath = user.profilePicturePath
    ? `${imagesURL}/${user.profilePicturePath}`
    : "https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg";
  return (
    <TableRow key={`row-${user.id}`}>
      <TableCell>
        <UserBadge
          imagePath={imagePath}
          onClick={() => hanbleOpenImageModal(user.id!)}
        />
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
        <IconButton onClick={() => handleShowUpdateUser(user.id!)}>
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
