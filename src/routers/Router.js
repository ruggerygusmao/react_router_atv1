import { Route, BrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Cidade from "../components/Cidade";
import Musica from "../components/Musica";

const Router = () => {
    return(
    <BrowserRouter>
        <Route component = { Home }  path="/" exact />
        <Route component = { Cidade }  path="/cidade" />
        <Route component = { Musica }  path="/musica" />
    </BrowserRouter>
    );
};

export default Router;