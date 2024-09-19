import { createContext, useContext, useState } from 'react';

// Создаём контекст
const ProjectsContext = createContext();

// Хук для использования контекста
export const useProjects = () => {
  return useContext(ProjectsContext);
};

// Провайдер для передачи данных
export const ProjectsProvider = ({ children }) => {
  const [projects] = useState([
    { id: 1, title: 'Проект 1', description: 'Описание проекта 1', img: 'https://nefteresurs.ru/uploads/project/1721113771978-photo_2024-07-16_09-58-50.jpg' },
    { id: 2, title: 'Проект 2', description: 'Описание проекта 2', img: 'https://nefteresurs.ru/uploads/project/1721113771978-photo_2024-07-16_09-58-50.jpg' },
    { id: 3, title: 'Проект 3', description: 'Описание проекта 3', img: 'https://nefteresurs.ru/uploads/project/1721113771978-photo_2024-07-16_09-58-50.jpg' },
    { id: 4, title: 'Проект 4', description: 'Описание проекта 4', img: 'https://nefteresurs.ru/uploads/project/1721113771978-photo_2024-07-16_09-58-50.jpg' },
    { id: 5, title: 'Проект 5', description: 'Описание проекта 5', img: 'https://nefteresurs.ru/uploads/project/1721113771978-photo_2024-07-16_09-58-50.jpg' },
    { id: 6, title: 'Проект 6', description: 'Описание проекта 6', img: 'https://nefteresurs.ru/uploads/project/1721113771978-photo_2024-07-16_09-58-50.jpg' },
  ]);

  return (
    <ProjectsContext.Provider value={projects}>
      {children}
    </ProjectsContext.Provider>
  );
};
