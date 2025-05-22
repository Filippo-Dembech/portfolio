import { HashRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import Homepage from './pages/Homepage';

function App() {

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<WelcomePage />}/>
                <Route path="/home" element={<Homepage />}/>
            </Routes>
        </HashRouter>
    );
}

export default App;
