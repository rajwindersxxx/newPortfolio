import SkillChart from './SkillChart';

export default function BestSkills() {
  return (
    <div>
      <h3 className="text-4xl text-center mb-8">Skills Overview</h3>
      <div className="grid md:grid-cols-2 gap-4 items-center">
        <div className="best_skills ">
          <SkillChart />
        </div>
        <p className="text-left">
          With a solid foundation in web applications, I have hands-on experience building projects using HTML, CSS,
          JavaScript, and backend skills in Nodejs and PostgreSQL. I find backend development especially fascinating,
          from creating logical flows to designing efficient SQL databases.
        </p>
      </div>
    </div>
  );
}
