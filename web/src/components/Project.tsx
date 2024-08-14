import { ProjectObject } from "src/types/project"
import Blend from "./Blend"

type Props = {
  project: ProjectObject
}

export default function Project ({ project }: Props) {
  return (
    <div id={`${project.name}-preview`} className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bd-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="overflow-clip h-52 flex flex-col justify-center items-center rounded-t-xl xl:overflow-clip">
            <Blend project={project}></Blend>
            <span
              className="absolute xl:absolute inline-block w-[112px] h-[112px]">
              <span className="w-24px h-24px w-full h-full">
                <img src={project.iconUrl} alt={`${project.name} logo.`}></img>
              </span>
            </span>
          </div>
          <div className="p-4 md:p-6">
            <span
              className={`block mb-1 text-xs font-semibold uppercase`} style={{color:project.colors[2]}}
              data-ai-key="content">
              {project.category}
            </span>
            <h1
              className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white"
              data-ai-key="content"
              data-ai-type="html">
              {project.name}
            </h1>
            {project.description}
          </div>
          <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
            {(project.name === 'entraspection' || project.name === 'brickquery') &&
            <>
            <a
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-primary-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800 sm:p-4"
              data-ai-key="content"
              href={project.urls.demo}
              target="_self">
              {(project.name === 'entraspection') && 'Try Demo' || (project.name === 'brickquery') && 'View brickinfo Demo'}
            </a>
            <a
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-primary-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800 rounded-br-xl sm:p-4"
              data-ai-key="content"
              href={project.urls.gitHub}
              target="_self">
              View Source
            </a>
            </>
            }
          </div>
        </div>
  )
}