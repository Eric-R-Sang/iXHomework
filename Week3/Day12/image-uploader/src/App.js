import "./App.css";

import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter } from "react-router-dom";
import AddImagePage from "./components/AddImagePage";

function App() {
  return (
    <BrowserRouter>
      <AddImagePage></AddImagePage>
    </BrowserRouter>
  );
}

export default App;
