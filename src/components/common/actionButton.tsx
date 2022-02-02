import { Button } from "@mui/material";
import { type } from "os";

type ButtonColor =
  | "inherit"
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "warning"
  | undefined;

interface Props {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  color?: ButtonColor;
}
export const ActionButton = (props: Props) => {
  const { label, onClick, disabled, fullWidth, color = "inherit" } = props;
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      color={color}
    >
      {label}
    </Button>
  );
};
