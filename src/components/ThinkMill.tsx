function ThinkMill() {
  return (
    <header
      className="fixed inset-x-0 top-0 z-10 h-16 border-b border-gray-200 bg-white min-[940px]:relative min-[940px]:h-auto min-[940px]:border-0"
      x-data="{open:false}"
    >
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:block focus:w-full focus:rounded-none focus:p-2 focus:font-medium focus:outline-none focus:ring-inset focus-visible:ring-offset-0"
      >
        Skip to content
      </a>
      <div className="mx-auto h-full max-w-7xl px-4 sm:px-6">
        <div className="flex h-full items-center justify-between min-[940px]:py-6 xl:justify-start xl:space-x-10">
          <div className="flex justify-start min-[940px]:w-0 min-[940px]:flex-1">
            <a href="/" aria-label="Link to home page">
              <svg
                viewBox="0 0 135 42"
                aria-hidden="true"
                className="h-10"
                fill="none"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.9722 42C32.5548 42 41.9443 32.598 41.9443 21C41.9443 9.40202 32.5548 0 20.9722 0C9.38955 0 0 9.40202 0 21C0 32.598 9.38955 42 20.9722 42Z"
                  fill="currentColor"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  className="fill-tm-red-brand group-hover:fill-black"
                ></path>
                <path
                  d="M14.3672 23.6501C14.3672 24.664 14.7047 25.0731 15.593 25.0731C15.8239 25.0731 16.0726 25.0376 16.2147 24.9842V26.5674C15.9127 26.6563 15.4508 26.7275 15.0778 26.7275C13.177 26.7275 12.342 25.927 12.342 23.9525V19.1319H10.832V17.5843H12.342V15.3252H14.3672V17.5843H16.1259V19.1319H14.3672V23.6501ZM25.1331 19.0076C25.7904 17.9759 26.6609 17.3711 28.0287 17.3711C29.9473 17.3711 31.1198 18.6162 31.1198 21.0532V26.6209H29.0946V21.2489C29.0946 19.6479 28.4729 19.0076 27.4603 19.0076C26.27 19.0076 25.5595 20.0215 25.5595 21.747V26.6209H23.5343V21.0354C23.5343 19.7547 22.9658 19.0076 21.9177 19.0076C20.7097 19.0076 20.0169 20.0393 20.0169 21.7825V26.6209H17.9917V17.5845H19.9281V18.6696H19.9636C20.6031 17.798 21.4025 17.3711 22.4684 17.3711C23.7119 17.3711 24.6712 17.9403 25.1331 19.0076Z"
                  fill="white"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                ></path>
                <path
                  d="M63.8969 15.886V13.7754H52V15.886H56.7425V28.2248H59.1543V15.886H63.8969ZM67.6845 19.133V13.7754H65.374V28.2248H67.6845V22.5019C67.6845 20.5333 68.7181 19.5389 70.0355 19.5389C71.3326 19.5389 72.123 20.2695 72.123 22.1163V28.2248H74.4335V21.9133C74.4335 19.0924 73.0148 17.6719 70.684 17.6719C69.5288 17.6719 68.4546 18.1386 67.725 19.133H67.6845ZM79.3954 15.9874V13.7754H77.085V15.9874H79.3954ZM79.3954 28.2245V17.915H77.085V28.2245H79.3954ZM87.4594 17.6719C86.1015 17.6719 85.0273 18.3213 84.3787 19.2548H84.3382V17.9154H82.1494V28.2248H84.4598V22.5019C84.4598 20.5333 85.4934 19.5389 86.8108 19.5389C88.1079 19.5389 88.8983 20.2695 88.8983 22.1163V28.2248H91.2088V21.9133C91.2088 19.0925 89.7901 17.6719 87.4594 17.6719ZM103.144 28.2248L98.4012 22.6236L102.657 17.9154H99.9618L96.2123 22.1366H96.1718V13.7754H93.8613V28.2248H96.1718V23.2324H96.2123L100.225 28.2248H103.144ZM115.483 17.6719C113.923 17.6719 112.93 18.3619 112.18 19.5389C111.653 18.3213 110.558 17.6719 109.14 17.6719C107.924 17.6719 107.012 18.1589 106.282 19.1533H106.242V17.9154H104.032V28.2248H106.343V22.7048C106.343 20.716 107.133 19.5389 108.511 19.5389C109.707 19.5389 110.356 20.3913 110.356 21.8525V28.2248H112.666V22.6642C112.666 20.6957 113.477 19.5389 114.835 19.5389C115.99 19.5389 116.699 20.2695 116.699 22.096V28.2248H119.01V21.8727C119.01 19.0925 117.672 17.6719 115.483 17.6719ZM123.973 15.9874V13.7754H121.662V15.9874H123.973ZM123.973 28.2245V17.915H121.662V28.2245H123.973ZM129.037 28.2248V13.7754H126.727V28.2248H129.037ZM134.101 28.2248V13.7754H131.791V28.2248H134.101Z"
                  fill="currentColor"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  className="fill-black"
                ></path>
              </svg>
            </a>
          </div>
          <nav className="-my-2 -mr-2 min-[940px]:hidden">
            <button
              className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none"
              aria-label="Open menu"
              type="button"
              aria-expanded="false"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 stroke-gray-900"
                fill="none"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </nav>
          <nav className="hidden items-center space-x-8 min-[940px]:flex">
            <div className="relative">
              <button
                className="no-link text-md hover:text-tm-red-brand flex shrink-0 items-center justify-center border-b-2 border-transparent bg-none px-0 py-0.5 font-medium text-gray-800 hover:bg-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
                aria-expanded="false"
              >
                <span className="border-transparent">Services</span>
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  fill="currentColor"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                className="absolute -right-36 z-10 -ml-4 mt-3 w-screen max-w-sm transform px-2 sm:px-0"
                x-description="'Solutions' flyout menu, show/hide based on flyout menu state."
                x-show="open"
                x-transition:enter="transition ease-out duration-200"
                x-transition:enter-end="opacity-100 translate-y-0"
                x-transition:enter-start="opacity-0 translate-y-1"
                x-transition:leave="transition ease-in duration-150"
                x-transition:leave-end="opacity-0 translate-y-1"
                x-transition:leave-start="opacity-100 translate-y-0"
                x-ref="panel"
              >
                <div className="overflow-hidden rounded-xl shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <a
                      href="/services/design-systems"
                      className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="text-tm-red-brand h-6 w-6 flex-shrink-0"
                        fill="none"
                        focusable="false"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                        stroke-width="1.5"
                      >
                        <path
                          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <div className="ml-4">
                        <span className="border-b-0 border-transparent text-base font-medium text-gray-900">
                          Design Systems
                        </span>
                        <p className="mt-1 text-sm">
                          Depth of experience that few can match
                        </p>
                      </div>
                    </a>
                    <a
                      href="/services/product-design-engineering"
                      className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="text-tm-red-brand h-6 w-6 flex-shrink-0"
                        fill="none"
                        focusable="false"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                        stroke-width="1.5"
                      >
                        <path
                          d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <div className="ml-4">
                        <span className="border-b-0 border-transparent text-base font-medium text-gray-900">
                          Product Design &amp; Engineering
                        </span>
                        <p className="mt-1 text-sm">
                          Experts in cross-functional collaboration
                        </p>
                      </div>
                    </a>
                    <a
                      href="/services/augmentation"
                      className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="text-tm-red-brand h-6 w-6 flex-shrink-0"
                        fill="none"
                        focusable="false"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                        stroke-width="1.5"
                      >
                        <path
                          d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <div className="ml-4">
                        <span className="border-b-0 border-transparent text-base font-medium text-gray-900">
                          Team Augmentation
                        </span>
                        <p className="mt-1 text-sm">
                          On-tap capability for new &amp; active projects
                        </p>
                      </div>
                    </a>
                    <a
                      href="/services/api-platforms"
                      className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="text-tm-red-brand h-6 w-6 flex-shrink-0"
                        fill="none"
                        focusable="false"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                        stroke-width="1.5"
                      >
                        <path
                          d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <div className="ml-4">
                        <span className="border-b-0 border-transparent text-base font-medium text-gray-900">
                          API Platforms
                        </span>
                        <p className="mt-1 text-sm">
                          Node.js, React, &amp; GraphQL at scale
                        </p>
                      </div>
                    </a>
                  </div>
                  <hr />
                  <div className="group relative bg-white px-5 py-3 sm:p-8">
                    <a href="/services" className="group-hover:bg-gray-50">
                      <p className="ml-10 text-base font-medium text-gray-900">
                        View all Services →
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a
              href="/work"
              className="no-link text-md hover:text-tm-red-brand flex shrink-0 items-center justify-center border-b-2 border-transparent bg-none px-0 py-0.5 font-medium text-gray-800 hover:bg-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
            >
              Work{' '}
            </a>
            <a
              href="/open-source"
              className="no-link text-md hover:text-tm-red-brand flex shrink-0 items-center justify-center border-b-2 border-transparent bg-none px-0 py-0.5 font-medium text-gray-800 hover:bg-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
            >
              Open Source{' '}
            </a>
            <a
              href="/method"
              className="no-link text-md hover:text-tm-red-brand flex shrink-0 items-center justify-center border-b-2 border-transparent bg-none px-0 py-0.5 font-medium text-gray-800 hover:bg-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
            >
              Method{' '}
            </a>
            <a
              href="/news"
              className="no-link text-md hover:text-tm-red-brand flex shrink-0 items-center justify-center border-b-2 border-transparent bg-none px-0 py-0.5 font-medium text-gray-800 hover:bg-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
            >
              News{' '}
            </a>
            <a
              href="/writing"
              className="no-link text-md hover:text-tm-red-brand flex shrink-0 items-center justify-center border-b-2 border-transparent bg-none px-0 py-0.5 font-medium text-gray-800 hover:bg-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
            >
              Writing{' '}
            </a>
            <a
              href="/about"
              className="no-link text-md hover:text-tm-red-brand flex shrink-0 items-center justify-center border-b-2 border-transparent bg-none px-0 py-0.5 font-medium text-gray-800 hover:bg-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
            >
              About
            </a>
            <div className="ml-10 hidden min-[940px]:flex">
              <a
                href="/contact"
                className="no-link text-md bg-tm-red-brand disabled:bg-tm-red-brand/50 flex shrink-0 items-center justify-center rounded-md px-4 py-2 font-medium font-medium text-white hover:text-white hover:opacity-90 focus:rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 disabled:pointer-events-none"
              >
                Contact
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div
        className="absolute right-0 top-0 z-10 w-full max-w-sm origin-top-right transform p-2 transition min-[940px]:hidden"
        x-description="Mobile menu, show/hide based on mobile menu state."
        x-show="open"
        x-transition:enter="duration-200 ease-out"
        x-transition:enter-end="opacity-100 scale-100"
        x-transition:enter-start="opacity-0 scale-95"
        x-transition:leave="duration-100 ease-in"
        x-transition:leave-end="opacity-0 scale-95"
        x-transition:leave-start="opacity-100 scale-100"
      >
        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="px-5 pb-6 pt-5">
            <div className="flex items-center justify-between">
              <div>
                <svg
                  viewBox="0 0 135 42"
                  aria-hidden="true"
                  className="h-10"
                  fill="none"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.9722 42C32.5548 42 41.9443 32.598 41.9443 21C41.9443 9.40202 32.5548 0 20.9722 0C9.38955 0 0 9.40202 0 21C0 32.598 9.38955 42 20.9722 42Z"
                    fill="currentColor"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    className="fill-tm-red-brand group-hover:fill-black"
                  ></path>
                  <path
                    d="M14.3672 23.6501C14.3672 24.664 14.7047 25.0731 15.593 25.0731C15.8239 25.0731 16.0726 25.0376 16.2147 24.9842V26.5674C15.9127 26.6563 15.4508 26.7275 15.0778 26.7275C13.177 26.7275 12.342 25.927 12.342 23.9525V19.1319H10.832V17.5843H12.342V15.3252H14.3672V17.5843H16.1259V19.1319H14.3672V23.6501ZM25.1331 19.0076C25.7904 17.9759 26.6609 17.3711 28.0287 17.3711C29.9473 17.3711 31.1198 18.6162 31.1198 21.0532V26.6209H29.0946V21.2489C29.0946 19.6479 28.4729 19.0076 27.4603 19.0076C26.27 19.0076 25.5595 20.0215 25.5595 21.747V26.6209H23.5343V21.0354C23.5343 19.7547 22.9658 19.0076 21.9177 19.0076C20.7097 19.0076 20.0169 20.0393 20.0169 21.7825V26.6209H17.9917V17.5845H19.9281V18.6696H19.9636C20.6031 17.798 21.4025 17.3711 22.4684 17.3711C23.7119 17.3711 24.6712 17.9403 25.1331 19.0076Z"
                    fill="white"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="-mr-2">
                <button
                  className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                  aria-label="Close menu"
                  type="button"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-6 w-6 stroke-gray-900"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path
                      d="M6 18L18 6M6 6l12 12"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-6 space-y-6">
              <div className="grid gap-4">
                <a href="/work" className="hover:text-tm-red-brand font-medium">
                  <span className="border-b-0 border-transparent">Work </span>
                </a>
                <a
                  href="/open-source"
                  className="hover:text-tm-red-brand font-medium"
                >
                  <span className="border-b-0 border-transparent">
                    Open Source{' '}
                  </span>
                </a>
                <a
                  href="/method"
                  className="hover:text-tm-red-brand font-medium"
                >
                  <span className="border-b-0 border-transparent">Method </span>
                </a>
                <a href="/news" className="hover:text-tm-red-brand font-medium">
                  <span className="border-b-0 border-transparent">News </span>
                </a>
                <a
                  href="/writing"
                  className="hover:text-tm-red-brand font-medium"
                >
                  <span className="border-b-0 border-transparent">
                    Writing{' '}
                  </span>
                </a>
                <a
                  href="/about"
                  className="hover:text-tm-red-brand font-medium"
                >
                  <span className="border-b-0 border-transparent">About</span>
                </a>
              </div>
              <hr />
              <div>
                <h2 className="font-medium text-gray-500">Services</h2>
                <div className="mt-4 grid justify-start gap-4">
                  <a
                    href="/services/design-systems"
                    className="hover:text-tm-red-brand flex items-center gap-4 font-medium"
                  >
                    <span className="border-b-0 border-transparent">
                      Design Systems{' '}
                    </span>
                  </a>
                  <a
                    href="/services/product-design-engineering"
                    className="hover:text-tm-red-brand flex items-center gap-4 font-medium"
                  >
                    <span className="border-b-0 border-transparent">
                      Product Design &amp; Engineering{' '}
                    </span>
                  </a>
                  <a
                    href="/services/augmentation"
                    className="hover:text-tm-red-brand flex items-center gap-4 font-medium"
                  >
                    <span className="border-b-0 border-transparent">
                      Team Augmentation{' '}
                    </span>
                  </a>
                  <a
                    href="/services/api-platforms"
                    className="hover:text-tm-red-brand flex items-center gap-4 font-medium"
                  >
                    <span className="border-b-0 border-transparent">
                      API Platforms
                    </span>
                  </a>
                </div>
                <div className="mb-8 mt-4">
                  <a
                    href="/services"
                    className="hover:text-tm-red-brand font-medium"
                  >
                    <span>View all →</span>
                  </a>
                </div>
              </div>
              <div>
                <a
                  href="/contact"
                  className="no-link text-md bg-tm-red-brand disabled:bg-tm-red-brand/50 flex shrink-0 items-center justify-center rounded-md px-4 py-2 font-medium font-medium text-white hover:text-white hover:opacity-90 focus:rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 disabled:pointer-events-none"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default ThinkMill;
