import { footerNavigation } from '@/lib/data/footer-navigation';
import { cn } from '@/lib/utils';
import { ShieldCheckIcon } from '@heroicons/react/20/solid';
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { Oswald } from 'next/font/google';
import Link from 'next/link';

const oswald = Oswald({ subsets: ['latin'], weight: ['700'] });

const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="bg-amber-100/50">
      <div className="mx-auto max-w-7xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="flex flex-col items-center justify-center sm:items-start">
            <Link className="inline-flex items-center" href="/">
              <ShieldCheckIcon
                className="h-14 w-auto text-amber-500"
                aria-hidden="true"
              />
              <div className="ml-4 flex flex-col text-indigo-700">
                <span
                  className={cn(
                    'font-weight-900 text-3xl tracking-wider',
                    oswald.className
                  )}
                >
                  Synergy
                </span>
                <span
                  className={cn('text-xl tracking-wider', oswald.className)}
                >
                  Education Trust
                </span>
              </div>
            </Link>
            <p className="mt-4 max-w-md text-center leading-relaxed text-indigo-600 dark:text-indigo-400 sm:max-w-xs sm:text-left">
              Get connected with us on social networks
            </p>
            <ul className="mb-8 mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {footerNavigation.social.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-indigo-500 hover:text-indigo-700"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:grid-cols-3 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-bold text-indigo-800 underline decoration-amber-500 decoration-[3px] underline-offset-8">
                About Us
              </p>

              <nav aria-label="Footer About Nav" className="mt-4">
                <ul className="divide-y text-base font-medium">
                  <li className="py-2">
                    <a
                      className=" text-indigo-700 transition hover:text-indigo-700/75"
                      href="/"
                    >
                      Company History
                    </a>
                  </li>

                  <li className="py-2">
                    <a
                      className="text-indigo-700 transition hover:text-indigo-700/75"
                      href="/"
                    >
                      Meet the Team
                    </a>
                  </li>

                  <li className="py-2">
                    <a
                      className="text-indigo-700 transition hover:text-indigo-700/75"
                      href="/"
                    >
                      Employee Handbook
                    </a>
                  </li>

                  <li className="py-2">
                    <a
                      className="text-indigo-700 transition hover:text-indigo-700/75"
                      href="/"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-bold text-indigo-800 underline decoration-amber-500 decoration-[3px] underline-offset-8">
                Our Schools
              </p>

              <nav aria-label="Footer Services Nav" className="mt-4">
                <ul className="divide-y text-base font-medium">
                  <li className="py-2">
                    <a
                      className="text-indigo-700 transition hover:text-indigo-700/75"
                      href="https://highfurlong.org"
                      target="_blank"
                    >
                      Highfurlong
                    </a>
                  </li>

                  <li className="py-2">
                    <a
                      className="text-indigo-700 transition hover:text-indigo-700/75"
                      href="https://www.boundaryschool.co.uk"
                      target="_blank"
                    >
                      Boundary Primary School
                    </a>
                  </li>

                  <li className="py-2">
                    <Link
                      className="text-indigo-700 transition hover:text-indigo-700/75"
                      href="https://www.stanley.richmond.sch.uk"
                      target="_blank"
                    >
                      Stanley Primary School
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-bold text-indigo-800 underline decoration-amber-500 decoration-[3px] underline-offset-8 ">
                Contact Us
              </p>

              <ul className="mt-8 space-y-4 text-base font-medium">
                <li className="flex items-center justify-start gap-1.5 ">
                  <span className="rounded-lg bg-amber-200 p-3">
                    <MapPinIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <address className="-mt-0.5 flex not-italic text-indigo-700 dark:text-indigo-300">
                    Blackpool Old Road, Blackpool, FY3 7LR
                  </address>
                </li>
                <li className="flex items-center justify-start gap-1.5">
                  <span className="rounded-lg bg-red-200 p-3">
                    <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-indigo-700 dark:text-indigo-300">
                    admin@set-trust.sch.uk
                  </span>
                </li>
                <li className="py-2">
                  <Link
                    className="flex items-center justify-start gap-1.5"
                    href="/"
                  >
                    <span className="rounded-lg bg-indigo-200 p-3">
                      <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                    </span>

                    <span className="text-indigo-700 dark:text-indigo-300">
                      01253 392188
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-6 dark:border-gray-800">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="space-x-2 text-sm text-indigo-500 dark:text-indigo-400">
              <span className="block sm:inline">All rights reserved.</span>

              <Link
                className="hover:text-indigo -800 inline-block text-indigo-600 underline underline-offset-4"
                href="/about"
              >
                Terms & Conditions
              </Link>

              <span>&middot;</span>

              <Link
                className="inline-block text-indigo-600 underline underline-offset-4 hover:text-indigo-800"
                href="/about"
              >
                Privacy Policy
              </Link>
            </p>

            <p className="mt-4 text-sm text-indigo-500 dark:text-indigo-400 sm:order-first sm:mt-0">
              &copy; 2023 Synergy Education Trust.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
