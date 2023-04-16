import { Home, AboutMe, Project, ProjectDetails } from './app/views';
import { BrowserRouter, Routes, Route } from './app/vendor';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project-details/:id" element={<ProjectDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
