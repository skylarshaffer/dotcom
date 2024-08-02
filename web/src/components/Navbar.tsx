export default function Navbar() {
  return (
    <nav
      className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-8 mx-auto"
      aria-label="Global"
    >
      <div className="md:col-span-3 bg-primary h-12 pt-2">
        <a
          href="https://github.com/skylarshaffer"
          className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
          aria-label="Preline"
        >
          <div className="flex xl:flex xl:">
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
    </div>
      <div
        className="hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6 hs-collapse"
        id="navbar-collapse-with-animation"
      >
        <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">

    </div>
      </div>
    </nav >
  )
}
