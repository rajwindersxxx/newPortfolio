import BestSkills from '../components/BestSkills';
import SkillsDescription from '../components/SkillsDescription';
import  skillsData  from '../data/skillsData.json';
export default function Skills() {
  return (
    <section
      id="skills"
      className="skills_section container min-h-screen text-teal-200 mx-auto bg-backgroundColor/85  pt-32"
    >
      <h2 className="text-4xl text-center mb-8">Skills and Experiences</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 p-8 items-center justify-center mb-12">
        {skillsData.map((data) => (
          <SkillsDescription data={data} key={crypto.randomUUID()} />
        ))}
      </div>
      <BestSkills />
    </section>
  );
}
