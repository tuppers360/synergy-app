import Image from 'next/image';
import { Button } from './ui/Button';

function MainPageHero() {
  return (
    <div className="relative isolate bg-gradient-to-b from-indigo-100/50 to-amber-100/50">
      <div className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-32 pt-24 sm:pt-32 lg:px-8 lg:pt-16">
          <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h2 className="flex text-base font-semibold leading-7 text-indigo-600">
                <span className="relative -rotate-3 transform rounded-xl bg-indigo-200 px-5 py-1 text-indigo-800 shadow-md">
                  Welcome to
                </span>
              </h2>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-indigo-700 sm:text-5xl lg:text-6xl">
                <span className="text-yellow-500">SYNERGY</span> Education Trust
              </h1>
              <p className="relative mt-6 text-lg font-medium leading-8 text-indigo-600 sm:max-w-md lg:max-w-none">
                Established in West Lancashire in 2023, the SET Education Trust
                is a dynamic, cross-phase multi-academy trust that was founded
                by ine SEN school and two secondary schools. As a non-profit
                educational trust and a certified academy sponsor, we&apos;re
                committed to providing high-quality education to all our
                students.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Button href="#" size="lg" className="text-md">
                  Read More
                </Button>
              </div>
            </div>
            <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
              <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                <div className="translate-y-15 relative translate-x-2 rotate-3 transform">
                  <Image
                    src="https://source.unsplash.com/WMDKC8moG9w"
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    width="1080"
                    height="100"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
              <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <div className="translate-y-15 relative translate-x-2 rotate-3 transform">
                  <Image
                    src="https://source.unsplash.com/tRIw6cFSs2E?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    width="1080"
                    height="100"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="translate-y-15 relative translate-x-2 rotate-3 transform">
                  <Image
                    src="https://source.unsplash.com/JfolIjRnveY"
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    width="1080"
                    height="100"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
              <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                <div className="translate-y-15 relative translate-x-2 rotate-3 transform">
                  <Image
                    src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    width="1080"
                    height="100"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="translate-y-15 relative translate-x-2 rotate-3 transform">
                  <Image
                    src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    width="1080"
                    height="100"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPageHero;
