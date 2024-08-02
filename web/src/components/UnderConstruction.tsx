export default function UnderConstruction () {
  return (
    <div className="bg-neutral-0 flex-grow">
      <div className="bg-gradient-to-b from-primary-600 h-full">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
          <div className="max-w-3xl text-center mx-auto">
            <h1
              className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
              data-ai-key="content"
              data-ai-type="html">
              Under Construction!
            </h1>
          </div>
          <div className="max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-200" data-ai-key="content" data-ai-type="html">
              For now, you can view my portfolio on GitHub at the button below
            </p>
          </div>
          <div className="text-center">
            <a
              href="https://github.com/skylarshaffer"
              target="_self"
              className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-secondary-600 to-secondary-400 shadow-lg shadow-transparent hover:shadow-primary-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-6 dark:focus:ring-offset-gray-800">
              Portfolio
              <span className="flex-shrink-0 size-4">
                <svg
                  className="w-[inherit] h-[inherit]"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </a>
          </div>
          <div className="max-w-3xl text-center mx-auto pt-20">
            <p className="text-sm text-gray-500" data-ai-key="content" data-ai-type="html">
              psst...! if you <em>really</em> want to, you can view my site's in-progress build at <a className="inline-block hover:text-gray-400" href="https://dev.skylarshaffer.com">dev.skylarshaffer.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
