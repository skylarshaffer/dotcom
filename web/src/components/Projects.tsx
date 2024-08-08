import type { ProjectArray } from "src/types/project";
import Project from "./Project";

type Props = {
  projects: ProjectArray
}

export default function Projects({ projects }: Props) {
  return (
    <div className="max-w-[85rem] px-4 py-10 mx-auto sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-2xl mb-8 text-center lg:mb-14">
        <h1
          className="text-3xl text-gray-800 font-bold dark:text-gray-200 lg:text-4xl"
          data-ai-key="content"
          data-ai-type="html">
          Projects
        </h1>
      </div>
      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
        <Project project={projects[0]}></Project>
        <Project project={projects[1]}></Project>
        <Project project={projects[2]}></Project>
      </div>
    </div>
  );
};

