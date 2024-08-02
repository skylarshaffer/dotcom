import { ProjectObject } from "src/types/project";

type Props = {
  project: ProjectObject
}

export default function LinksSection({project}: Props) {
  return (
    <div >
      <a href={project.urls.website} target="_self" >
        <h1 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100" data-ai-key="content" data-ai-type="html">{project.name}</h1>
      </a>
      <div className="mt-3 grid space-y-3 text-sm">
        <p >
          <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" data-ai-key="content" href={project.urls.demo} target="_self">Demo</a>
        </p>
        <p >
          <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" data-ai-key="content" href={project.urls.gitHub} target="_self">Source</a>
        </p>
      </div>
    </div>
  )
}