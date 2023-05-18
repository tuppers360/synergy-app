'use client';

import { cn } from '@/lib/utils';
import { Popover, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  BellIcon,
  ShieldCheckIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid';
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { Oswald } from 'next/font/google';
import Link from 'next/link';
import { Fragment } from 'react';

const oswald = Oswald({ subsets: ['latin'], weight: ['700'] });

type NavBarProps = { name: string; href: string }[];

function NavBar({ bottomNavigation }: { bottomNavigation: NavBarProps }) {
  return (
    <Popover as="header" className="bg-indigo-100/50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8  lg:pb-8">
            <div className="relative flex h-24">
              <div className="flex flex-1 items-center justify-between lg:items-stretch lg:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link className="inline-flex items-center" href="/">
                    <ShieldCheckIcon
                      className="h-14 w-auto text-brand-500"
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
                        className={cn(
                          'text-xl tracking-wider',
                          oswald.className
                        )}
                      >
                        Education Trust
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="relative z-10 flex items-center lg:hidden">
                  {/* Mobile menu button */}
                  <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-800">
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <XMarkIcon
                        className="block h-8 w-8 text-indigo-800"
                        aria-hidden="true"
                      />
                    ) : (
                      <Bars3Icon
                        className="block h-8 w-8 text-indigo-800"
                        aria-hidden="true"
                      />
                    )}
                  </Popover.Button>
                </div>
              </div>

              <div className="hidden gap-x-5 text-indigo-800 lg:relative lg:z-10 lg:ml-8 lg:flex lg:items-center">
                <div className="items-center font-medium sm:inline-flex">
                  <span className="rounded-lg bg-amber-200 p-3">
                    <MapPinIcon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div className="ml-4 flex flex-col">
                    <h5 className="font-bold">Address</h5>
                    <p className="text-sm font-normal">
                      Blackpool Old Road, Blackpool, FY3 7LR
                    </p>
                  </div>
                </div>
                <div className="items-center font-medium  sm:inline-flex">
                  <span className="rounded-lg bg-red-200 p-3">
                    <EnvelopeIcon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div className="ml-4 flex flex-col">
                    <h5 className="font-bold">Email</h5>
                    <p className="text-sm font-normal">
                      admin@set-trust.sch.uk
                    </p>
                  </div>
                </div>
                <div className="items-center font-medium  sm:inline-flex">
                  <span className="rounded-lg bg-indigo-200 p-3">
                    <PhoneIcon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div className="ml-4 flex flex-col">
                    <h5 className="font-bold">Phone</h5>
                    <p className="text-sm font-normal">01253 392188</p>
                  </div>
                </div>
              </div>
            </div>
            <nav
              className="hidden lg:flex lg:space-x-8 lg:pt-5"
              aria-label="Global"
            >
              {bottomNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative z-10 block w-fit text-base font-medium text-indigo-800 after:absolute after:block after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-amber-500 after:transition after:duration-300 after:content-[''] after:hover:scale-x-100"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <Transition.Root as={Fragment}>
            <div className="lg:hidden">
              <Transition.Child
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="duration-150 ease-in"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Popover.Overlay className="fixed inset-0 z-20 bg-black bg-opacity-25" />
              </Transition.Child>

              <Transition.Child
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-150 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top transform p-2 transition"
                >
                  <div className="divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="bg-indigo-100/50 pb-2 pt-3">
                      <div className="flex items-center justify-between px-4">
                        <div>
                          <Link className="inline-flex items-center" href="/">
                            <ShieldCheckIcon
                              className="h-8 w-auto text-amber-500"
                              aria-hidden="true"
                            />
                            <div className="ml-4 flex flex-col text-indigo-700">
                              <span
                                className={cn(
                                  'font-weight-900 text-xl tracking-wider',
                                  oswald.className
                                )}
                              >
                                Synergy
                              </span>
                              <span
                                className={cn(
                                  'text-base tracking-wider',
                                  oswald.className
                                )}
                              >
                                Education Trust
                              </span>
                            </div>
                          </Link>
                        </div>
                        <div className="-mr-2">
                          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className="mt-3 space-y-1 px-2">
                        {bottomNavigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className="bg-indigo-100/50 pb-2 pt-4">
                      <div className="flex items-center px-5">
                        <button
                          type="button"
                          className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                        >
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition.Child>
            </div>
          </Transition.Root>
        </>
      )}
    </Popover>
  );
}

export default NavBar;
