import Header from './components/Header/Header';
import ProjectGrid from './components/ProjectGrid/ProjectGrid';
import Footer from './components/Footer/Footer';
import './App.css';

/**
 * Sample projects — replace or extend this array to add more demo projects.
 * Each entry is passed as props to <ProjectCard />.
 */
const PROJECTS = [
  {
    id: 1,
    title: 'Project Alpha',
    description: 'A full-stack web application built with React and Node.js.',
    tags: ['React', 'Node.js', 'MongoDB'],
    demoUrl: 'https://example.com/alpha',
    codeUrl: 'https://github.com/example/alpha',
  },
  {
    id: 2,
    title: 'Project Beta',
    description: 'A mobile-first e-commerce site with real-time updates.',
    tags: ['Next.js', 'Tailwind', 'Supabase'],
    demoUrl: 'https://example.com/beta',
    codeUrl: 'https://github.com/example/beta',
  },
  {
    id: 3,
    title: 'Project Gamma',
    description: 'A CLI tool that automates infrastructure provisioning.',
    tags: ['Go', 'Terraform', 'AWS'],
    codeUrl: 'https://github.com/example/gamma',
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <ProjectGrid projects={PROJECTS} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

