import { ProjectObject } from "src/types/project"

type Props = {
  project: ProjectObject
}

export default function Project ({ project }: Props) {
  return (
    <div id={`${project.name}-preview`} className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bd-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="overflow-clip h-52 flex flex-col justify-center items-center bg-primary-600 rounded-t-xl xl:overflow-clip">
            <img
              className="h-[100%] relative w-[100%] xl:h-[100%] xl:relative xl:w-[100%]"
              src="https://fakeimg.pl/400x200?text=Choose&amp;amp;font=bebas"
              alt=""
              height=""
              width=""
            />
            <span
              className="absolute xl:absolute inline-block w-[112px] h-[112px]">
              <span className="w-24px h-24px w-full h-full">
                <svg
                  className="w-[inherit] h-[inherit]"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect width="56" height="56" rx="10" fill="white"></rect>
                  <g clip-path="url(#clip0_2204_541)">
                    <path
                      d="M37.0409 28.8697C33.1968 28.8697 30.0811 31.9854 30.0811 35.8288C30.0811 39.6726 33.1968 42.789 37.0409 42.789C40.8843 42.789 44 39.6726 44 35.8288C44 31.9854 40.8843 28.8697 37.0409 28.8697ZM18.9594 28.8701C15.116 28.8704 12 31.9854 12 35.8292C12 39.6726 15.116 42.7886 18.9594 42.7886C22.8032 42.7886 25.9192 39.6726 25.9192 35.8292C25.9192 31.9854 22.8032 28.8701 18.9591 28.8701H18.9594ZM34.9595 20.1704C34.9595 24.0138 31.8438 27.1305 28.0004 27.1305C24.1563 27.1305 21.0406 24.0138 21.0406 20.1704C21.0406 16.3269 24.1563 13.2109 28.0003 13.2109C31.8438 13.2109 34.9591 16.3269 34.9591 20.1704H34.9595Z"
                      fill="url(#paint0_radial_2204_541)"></path>
                  </g>

                </svg>
              </span>
            </span>
          </div>
          <div className="p-4 md:p-6">
            <span
              className="block mb-1 text-xs font-semibold uppercase text-primary-600 dark:text-primary-500"
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
            <a
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-primary-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800 sm:p-4"
              data-ai-key="content"
              href={project.urls.demo}
              target="_self">
              Watch Demo
            </a>
            <a
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-primary-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800 rounded-br-xl sm:p-4"
              data-ai-key="content"
              href={project.urls.gitHub}
              target="_self">
              View Source
            </a>
          </div>
        </div>
  )
}