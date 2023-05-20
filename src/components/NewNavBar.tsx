import { ShieldCheckIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

function NewNavBar({ bottomNavigation }: any) {
  return (
    <header className="fixed inset-x-0 top-0 z-10 h-16 border-b border-gray-200 bg-white min-[940px]:relative min-[940px]:h-auto min-[940px]:border-0">
      <div className="mx-auto h-full max-w-7xl px-4 sm:px-6">
        <div className="flex h-full items-center justify-between min-[940px]:py-6 xl:justify-start xl:space-x-10">
          <div className="flex justify-start min-[940px]:w-0 min-[940px]:flex-1">
            <Link
              href="/"
              aria-label="Link to home page"
              className="inline-flex items-center text-2xl font-extrabold text-gray-800"
            >
              <ShieldCheckIcon
                className="h-10 w-auto text-new-brand-blue"
                aria-hidden="true"
              />
              SET4LIFE
            </Link>
          </div>
          <nav className="hidden items-center space-x-8 min-[940px]:flex">
            {bottomNavigation.map((item: any) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex shrink-0 items-center justify-center border-b-2 border-transparent bg-none px-0 py-0.5 text-sm font-bold leading-tight text-gray-800 hover:bg-none hover:text-new-brand-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
              >
                {item.name}
              </Link>
            ))}
            <div className="ml-10 hidden min-[940px]:flex">
              <a
                href="/contactus"
                className="text-md flex shrink-0 items-center justify-center rounded-md bg-new-brand-blue px-4 py-2 text-sm font-medium text-white hover:text-white hover:opacity-90 focus:rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:bg-brand-500/50"
              >
                Contact
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default NewNavBar;
