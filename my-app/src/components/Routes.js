import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Backlog from "../pages/Backlog";
import Releases from "../pages/Releases";
import Sprints from "../pages/Sprints";
import Error from "../pages/Error";
import Home from "./container/Home";
import NavBar from "./ui/NavBar";


const Rutas = () => {

    return(
        <div>
            <Router>
            <NavBar/>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/releases" element={<Releases/>}/>
                    <Route exact path="/backlog" element={<Backlog/>}/>
                    <Route exact path="/sprints" element={<Sprints/>}/>
                    <Route path="*" element={<Error/>}/>
                </Routes>
            </Router>
        </div>
    )
};

export default Rutas