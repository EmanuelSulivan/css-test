import { Box, CircularProgress } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const LoginView = () => {
  const { loading, login } = useContext(AuthContext);
  return (
    <div className="h-100" style={{ border: "1px solid red", height: "100%" }}>
      <div className="container h-100">
        <div className="row h-100">
          <form onSubmit={login} className="my-auto">
            <div className="col-9 mx-auto">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </div>
            <div className="col">
              {loading && (
                <Box sx={{ display: "flex" }}>
                  <CircularProgress color="secondary" />
                </Box>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
