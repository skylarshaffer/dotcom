export default function Navbar() {
  return (
    <nav
      className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-8 mx-auto"
      aria-label="Global"
    >
      <div className="md:col-span-3">
        <a
          href="../templates/creative-agency/index.html"
          className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
          aria-label="Preline"
        >
          <div className="flex xl:flex xl:">
            <span className="h-8">
              <svg
                className="w-[inherit] h-[inherit]"
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2048 2048"
              >
                <defs>
                  <style>
                    .cls-1{'fill:#009fe0;'}.cls-2{'fill:#ffe001;'}.cls-3
                    {'fill:#f7bcda;'}
                  </style>
                </defs>
                <title>flat</title>
                <path
                  className="cls-1"
                  d="M1462.86,1024c0,404-327.47,731.43-731.43,731.43S0,1428,0,1024H731.43V292.57C1135.39,292.57,1462.86,620,1462.86,1024Z"
                />
                <polygon
                  className="cls-2"
                  points="731.43 1024 1462.86 1024 2048 1609.14 2048 1755.42 731.43 1755.43 731.43 1024"
                />
                <path
                  className="cls-3"
                  d="M731.43,292.57V1024C327.47,1024,0,696.53,0,292.57Z"
                />
              </svg>
            </span>
            <div className="flex flex-col-reverse">
              <h2
                className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
                data-ai-key="content"
                data-ai-type="html"
              >
                Skylar Shaffer
              </h2>
            </div>
          </div>
        </a>
      </div>
      <div className="flex items-center gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
        <button
          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white"
          type="button"
        >
          <span data-ai-key="content">Links</span>
        </button>
        <button
          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent text-black transition disabled:opacity-50 disabled:pointer-events-none focus:outline-none bg-primary-400 hover:bg-primary-500 focus:bg-primary-500"
          type="button"
        >
          <span data-ai-key="content">Contact</span>
        </button>
        <div className="md:hidden">
          <button
            type="button"
            className="size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 hs-collapse-toggle"
            aria-controls="navbar-collapse-with-animation"
            aria-label="Toggle navigation"
            data-hs-collapse="#navbar-collapse-with-animation"
          >
            <span className="hs-collapse-open:hidden flex-shrink-0 size-4">
              <svg
                className="w-[inherit] h-[inherit]"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
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
                xmlns="http://www.w3.org/2000/svg"
              >
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
          <div>brickquery</div>
          <div>entraspection</div>
          <div>isotomate</div>
        </div>
      </div>
    </nav>
  )
}
