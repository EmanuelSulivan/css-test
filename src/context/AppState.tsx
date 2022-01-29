import { AuhtProvider } from "./AuthContext";

interface Props {
  children: JSX.Element;
}

export const AppState = ({ children }: Props) => {
  return <AuhtProvider>{children}</AuhtProvider>;
};
