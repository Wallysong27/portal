import { Skill_data } from "../../constants/skills";
import SkillDataProvider from "./skillsDataProvider";

export default function Skills() {
  return (
    <>
      <div className="flex flex-wrap md:grid grid-cols-6 w-full items-center justify-center justify-items-center gap-5 bg-zinc-400 py-10">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
    </>
  );
}
