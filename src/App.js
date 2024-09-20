import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProjectDetail from './pages/ProjectsDetail/ProjectDetail';
import { ProjectsProvider } from './context/ProjectContext';
import './App.css';
import Admin from './pages/Admin/Admin';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='main'>
      <ProjectsProvider>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </ProjectsProvider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
