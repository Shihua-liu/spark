import "./App.css"
import Homepage from "../pages/Homepage"
import {BrowserRouter, Route} from "react-router-dom"
const App = () =>{
    return(
        <BrowserRouter>
            <Homepage />
        </BrowserRouter>
    );
}

export default App;