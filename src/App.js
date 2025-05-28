import { HashRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import Homepage from './pages/Homepage';
import ProjectsPage from './pages/ProjectsPage';
import StoryPage from './pages/StoryPage';
import ContactsPage from './pages/ContactsPage';

function App() {

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<WelcomePage />}/>
                <Route path="/home" element={<Homepage />}/>
                <Route path="/projects" element={<ProjectsPage />}/>
                <Route path="/story" element={<StoryPage />}/>
                <Route path="/contacts" element={<ContactsPage />}/>
            </Routes>
        </HashRouter>
    );
}

export default App;
