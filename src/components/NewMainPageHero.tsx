import Image from 'next/image';
import Link from 'next/link';
function NewMainPageHero() {
  return (
    <div className="overflow-hidden">
      <div className="mx-auto max-w-[52rem] 2xl:max-w-5xl">
        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
          <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
            <div className="py-24">
              <div className="px-6">
                <h1 className="sr-only">Synergy Education Trust</h1>
                <h2 className="mb-6 text-5xl font-black text-gray-800 md:mb-12 md:text-7xl">
                  Inspiring Minds, Empowering Futures
                </h2>
                <p className="mx-auto mb-12 text-xl text-gray-600 md:text-2xl">
                  Established in West Lancashire in 2023, the SET Education
                  Trust is a dynamic, cross-phase multi-academy trust that was
                  founded by one SEN school and two secondary schools. As a
                  non-profit educational trust and a certified academy sponsor,
                  we&apos;re committed to providing high-quality education to
                  all our students.
                </p>

                <div className="flex items-center gap-4">
                  <Link
                    href="/contactus"
                    className="no-link disabled:bg-tm-red-brand/50 flex shrink-0 items-center justify-center rounded-md bg-new-brand-blue px-6 py-2.5 text-lg font-medium text-white hover:text-white hover:opacity-90 focus:rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 disabled:pointer-events-none md:py-4 md:text-xl"
                  >
                    Get in touch
                  </Link>
                  <span className="rich-text hidden min-[400px]:block">or</span>
                  <a
                    href="#what-we-do"
                    className="hidden font-medium text-gray-800 underline decoration-gray-300 decoration-2 underline-offset-4 hover:decoration-new-brand-blue min-[400px]:block"
                  >
                    see what we do
                  </a>
                </div>
              </div>
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
  );
}

export default NewMainPageHero;
