import { footerNavigation } from '@/lib/footer-navigation';
import Link from 'next/link';
import { Button } from './ui/Button';

function Footer() {
  return (
    <footer className="bg-amber-100/50" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          <img
            className="h-7"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Company name"
          />
          <div className="mt-16 xl:mt-0">
            <h3 className="text-lg font-bold leading-6 text-indigo-800">
              Solutions
            </h3>
            <ul role="list" className="mt-6 space-y-4">
              {footerNavigation.solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-md leading-6 text-indigo-600 hover:text-indigo-800"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-16 xl:mt-0">
            <h3 className="text-lg font-bold leading-6 text-indigo-800">
              Solutions
            </h3>
            <ul role="list" className="mt-6 space-y-4">
              {footerNavigation.solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-md leading-6 text-indigo-600 hover:text-indigo-800"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between">
          <div>
            <h3 className="text-lg font-semibold leading-6 text-indigo-800">
              Subscribe to our newsletter
            </h3>
            <p className="text-md mt-2 leading-6 text-indigo-600">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
          </div>
          <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              autoComplete="email"
              required
              className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-indigo-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-indigo-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:w-56 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
              <Button type="submit" size="lg" className="text-md">
                Subscribe
              </Button>
            </div>
          </form>
        </div>
        <div className="mt-8 border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {footerNavigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-indigo-600 hover:text-indigo-800"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-sm leading-5 text-indigo-600 md:order-1 md:mt-0">
            &copy; 2023 Synergy Education Trust. All rights reserved.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {footerNavigation.company.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-md leading-6 text-indigo-600 hover:text-indigo-800"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {footerNavigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-indigo-400 hover:text-indigo-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-sm leading-5 text-indigo-500">
          &copy; 2020 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
