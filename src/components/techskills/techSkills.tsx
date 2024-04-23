import { TechSkills_Data } from "../../constants/techSkills";
import TechSkillsDataProvider from "../techskills/techSkillsDataProvider";

export default function TechSkills() {
  return (
    <>
      <ul className="flex flex-col w-full gap-4 px-6 text-[#013440] font-semibold">
        {TechSkills_Data.map((skill, index) => (
          <TechSkillsDataProvider
            key={index}
            name={skill.name}
            level={skill.level}
          />
        ))}
      </ul>
    </>
  );
}
