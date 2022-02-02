import { Avatar, Badge, IconButton } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

interface Props {
  imagePath: string;
}

export const UserBadge = ({ imagePath }: Props) => {
  return (
    <Badge
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      badgeContent={
        <IconButton size="small">
          <CameraAltIcon />
        </IconButton>
      }
    >
      <Avatar src={imagePath} sx={{ width: 56, height: 56 }} />
    </Badge>
  );
};
