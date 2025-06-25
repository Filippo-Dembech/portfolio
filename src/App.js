import { HashRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import Homepage from './pages/Homepage/Homepage';
import ProjectsPage from './pages/ProjectsPage';
import StoryPage from './pages/StoryPage/StoryPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {

    return (
        <HashRouter>
            <ScrollToTop />
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
