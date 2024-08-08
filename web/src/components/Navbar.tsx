export default function Navbar() {
  return (
    <nav
      className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-8 mx-auto"
      aria-label="Global"
    >
      <div className="md:col-span-3 bg-primary">
        <a
          href="https://skylarshaffer.com"
          className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
          aria-label="Preline"
        >
          <div className="flex h-10 justify-center items-center">
            <h2
                className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
                data-ai-key="content"
                data-ai-type="html"
              >
                Skylar Shaffer
              </h2>
          </div>
        </a>
      </div>
      <div className="flex items-center gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
        {/*<a
        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white"
        >
        <span data-ai-key="content">Links</span>
      </a>
      <a
        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent text-black transition disabled:opacity-50 disabled:pointer-events-none focus:outline-none bg-primary-500 hover:bg-primary-400 focus:bg-primary-400"
        >
        <span data-ai-key="content">Contact</span>
      </a>
      */}
        <div className="md:hidden">
          <button
            type="button"
            className="size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 hs-collapse-toggle"
            aria-controls="navbar-collapse-with-animation"
            aria-label="Toggle navigation"
            data-hs-collapse="#navbar-collapse-with-animation">
            <span className="hs-collapse-open:hidden flex-shrink-0 size-4">
              <svg
                className="w-[inherit] h-[inherit]"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <line x1="3" x2="21" y1="6" y2="6"></line>
                <line x1="3" x2="21" y1="12" y2="12"></line>
                <line x1="3" x2="21" y1="18" y2="18"></line>
              </svg>
            </span>
            <span className="hs-collapse-open:block hidden flex-shrink-0 size-4">
              <svg
                className="w-[inherit] h-[inherit]"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div
        className="hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6 hs-collapse"
        id="navbar-collapse-with-animation"
      >
        <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
          <div>
            <a
              className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
              data-ai-key="content"
              href="#brickquery-preview"
              target="_self">
              brickquery
            </a>
          </div>
          <div>
            <a
              className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
              data-ai-key="content"
              href="#entraspection-preview"
              target="_self">
              entraspection
            </a>
          </div>
          <div>
            <a
              className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
              data-ai-key="content"
              href="#isocutor-preview"
              target="_self">
              isocutor
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}