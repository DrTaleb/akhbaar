import  {Fragment} from "react";
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import './App.css';
import {useRoutes} from "react-router-dom";
import mainRoutes from "../mainRoutes";

function App() {
    let routes = useRoutes(mainRoutes)
  return (
    <Fragment>
        {routes}
    </Fragment>
  );
}

export default App;
