import { useParams } from 'react-router-dom';
import { useProjects } from '../../context/ProjectContext';
import './project-detail.css';

function ProjectDetail() {
  const { id } = useParams();
  
  const projects = useProjects()
  // Находим проект по ID
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div>Проект не найден</div>;
  }

  return (
      <div 
        className="project-detail-background" 
        style={{ background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${project.img}) center / cover` }}
      >
        <div className="project-detail-overlay">
          <h1 className="project-detail-title">{project.title}</h1>
          <p className="project-description">{project.description}</p>
        </div>
      </div>
  );
}

export default ProjectDetail;
