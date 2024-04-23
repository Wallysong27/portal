import { Skill_data } from "../../constants/skills";
import SkillDataProvider from "./skillsDataProvider";

export default function Skills() {
  return (
    <>
      <div className="grid grid-cols-4 w-full items-center justify-center justify-items-center gap-10 p-10 rounded-3xl">
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
