import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppRouting } from "./AppRouting";
import { AppState } from "./context/AppState";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <AppState>
          <AppRouting />
        </AppState>
      </BrowserRouter>
    </div>
  );
};

export default App;
