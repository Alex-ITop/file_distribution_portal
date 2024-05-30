import { BrowserRouter as Router, } from "react-router-dom";
import { ProjectRoutes } from "./shared/ProjectRoutes/Routes";
import './styles/base.css';

const App = () => (
  <Router>
    <ProjectRoutes />
  </Router>
)

export default App
