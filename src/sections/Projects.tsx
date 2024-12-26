import ProjectCard from '../components/ProjectCard';
import  projectsData from '../data/projectData.json';

export default function Projects() {

  return (
    <section id="projects" className="w-full text-teal-200 min-h-screen pt-24">
      <div className="container border m-auto border-secondaryColor pb-4 p-4">
        <div>
          <h2 className="text-4xl text-center m-8 ">
            Explore some of my projects
          </h2>
        </div>
        <div className="grid grid-cols-project gap-8 justify-items-center">
          {projectsData.map(data => <ProjectCard data={data} key={crypto.randomUUID()}/>)}
        </div>
      </div>
    </section>
  );
}
