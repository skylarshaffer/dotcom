import { LinkArray, ProjectArray } from "src/types/project";
import LinksSection from "./LinksSection";
import Socials from "./Socials";

type Props = {
  projects: ProjectArray;
  links: LinkArray;
}

export default function Footer({projects, links}: Props) {
  return (
    <div className="max-w-[85rem] px-4 py-10 mt-auto w-full mx-auto sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-6 mb-10 md:grid-cols-4 lg:grid-cols-5">
        <div className="col-span-full hidden lg:col-span-1 lg:block">
          <a className="flex-none text-xl font-semibold dark:text-white" data-ai-key="content" href="#" target="_self">Skylar Shaffer</a>
          <div className="mt-3 text-xs text-gray-600 dark:text-gray-400 sm:text-sm">Full-Stack Web Developer</div>
        </div>
        <LinksSection project={projects[0]}></LinksSection>

        <LinksSection project={projects[1]}></LinksSection>

        <LinksSection project={projects[2]}></LinksSection>
        <div>
            <h1 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100" data-ai-key="content" data-ai-type="html">Links</h1>
            <div className="mt-3 grid space-y-3 text-sm">
              <p >
                <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" data-ai-key="content" href={links[0].url} target="_self">{links[0].siteName}</a>
              </p>
              <p >
                <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" data-ai-key="content" href={links[1].url} target="_self">{links[1].siteName}</a>
              </p>
              <p >
                <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" data-ai-key="content" href={links[2].url} target="_self">{links[2].siteName}</a>
              </p>
            </div>
        </div>
      </div>
      <div className="pt-5 mt-5 border-t border-gray-200 dark:border-gray-700">
        <div className="flex-row-reverse">
          <div className="flex justify-between items-center lg:justify-end">
            <div className="mt-3 lg:hidden">
              <a className="flex-none text-xl font-semibold dark:text-white" data-ai-key="content" href="home" target="_self">Skylar Shaffer</a><p>Full-Stack Web Developer</p></div>
            <Socials socials={{linkedIn: 'https://linkedin.com/in/skylarshaffer',gitHub: 'https://github.com/skylarshaffer', email: 'contact@skylarshaffer.com'}}></Socials>
          </div>
        </div>
      </div>
    </div>
  );
}