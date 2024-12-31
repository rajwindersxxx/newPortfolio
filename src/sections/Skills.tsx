import BestSkills from '../components/BestSkills';
import SkillsDescription from '../components/SkillsDescription';
import skillsData from '../data/skillsData.json';
import { v4 as uuidv4 } from 'uuid';
import { SkillsAnimations } from '../hooks/useAnimations';
import { useRef } from 'react';
export default function Skills() {
  const skillSection = useRef(null);
  return (
    <SkillsAnimations scope={skillSection}>
      <section
        id="skills"
        className="skills_section container mx-auto min-h-screen bg-backgroundColor/85 pt-32 text-teal-200"
        ref={skillSection}
      >
        <h2 className="mb-8 text-center text-4xl">Skills and Experiences</h2>
        <div className="mb-12 space-y-20">
          {skillsData.map((data) => (
            <SkillsDescription data={data} key={uuidv4()} />
          ))}
        </div>
        <BestSkills />
      </section>
    </SkillsAnimations>
  );
}
