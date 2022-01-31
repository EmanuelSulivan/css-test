import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Navbar = () => {
  const { logout } = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Prueba técnica
        </a>
        <div className="d-flex">
          <button className="btn btn-outline-secondary" onClick={logout}>
            Salir
          </button>
        </div>
      </div>
    </nav>
  );
};
