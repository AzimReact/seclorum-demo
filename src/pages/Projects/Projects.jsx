import { NavLink } from 'react-router-dom';
import { useProjects } from '../../context/ProjectContext';
import Layout from '../../components/Layout/Layout';
import './projects.css';

function Projects() {
  const projects = useProjects();

  return (
    <Layout>
      <div>
        <h1 className='project-title'>Проекты</h1>
        <div className="projects-container">
          {projects.map(project => (
            <NavLink to={`/projects/${project.id}`} key={project.id} className="project-card">
              <div
                className="project-image"
                style={{ backgroundImage: `url(${project.img})` }}
              >
                <div className="project-details">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
