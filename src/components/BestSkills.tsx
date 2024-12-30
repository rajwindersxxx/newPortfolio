import SkillChart from './SkillChart';

export default function BestSkills() {
  return (
    <div className="">
      <h3 className="mb-8 text-center text-4xl">Skills Overview</h3>
      <div className="grid items-center gap-4 md:grid-cols-2">
        <div className="best_skills">
          <SkillChart />
        </div>
        <p className="p-4 text-center text-teal-400 md:text-left">
          With a solid foundation in web applications, I have hands-on
          experience building projects using HTML, CSS, JavaScript, and backend
          skills in Nodejs and PostgreSQL. I find backend development especially
          fascinating, from creating logical flows to designing efficient SQL
          databases.
        </p>
      </div>
    </div>
  );
}
