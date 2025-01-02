import SkillChart from './SkillChart';
import SkillOverviewWindow from './SkillOverviewWindow';
export default function BestSkills() {
  return (
    <div className="">
      <h2 className="mb-8 text-center text-4xl">Skills Overview</h2>
      <div className="grid items-center gap-4 md:grid-cols-2">
        <SkillChart />
        <SkillOverviewWindow />
      </div>
    </div>
  );
}
