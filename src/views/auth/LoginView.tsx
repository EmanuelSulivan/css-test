import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const LoginView = () => {
  const { loading, login } = useContext(AuthContext);
  return (
    <div className="container h-100">
      <div className="row h-100 d-flex justify-content-center">
        <div className="col-11 col-lg-6 py-4 shadow-lg bg-body rounded my-auto px-4">
          <form onSubmit={login}>
            <div className="container">
              <div className="row">
                <div className="col-12 my-2 text-center text-secondary">
                  <p className="fs-2 text-center text-secondary">Bienvenido</p>
                </div>
                <div className="col-12">
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fas fa-user"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fas fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="password"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div className="d-grid gap-2">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    ) : (
                      <span>Fake Login</span>
                    )}
                  </button>
                </div>
                <div className="col-12 my-2 text-center text-secondary">
                  Haz click en "Fake Login" para continuar
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
