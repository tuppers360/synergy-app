import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

function ContactUs() {
  return (
    <main>
      <div className="relative isolate">
        <div className="mt-12 flex flex-col">
          <h2 className="flex justify-center text-base font-semibold leading-7">
            <div className="relative -rotate-3 transform rounded-xl bg-indigo-200 px-5 py-1 text-indigo-800 shadow-md">
              Get in Touch
            </div>
          </h2>
          <h1 className="flex items-center justify-center p-4 text-center text-6xl font-black text-indigo-800 md:text-8xl">
            Contact Us
          </h1>
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-4 pb-12 pt-24 sm:pt-16 lg:static lg:px-4 lg:py-24">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-indigo-800 sm:text-4xl">
                Welcome to our school academy trust&apos;s contact page.
              </h1>
              <p className="mt-6 text-lg leading-8 text-indigo-600">
                We value your feedback and are here to answer any questions you
                may have about our schools, programs, and services. Contact us
                by phone, email, or through the form on this page. Thank you for
                your interest in our commitment to excellence in education.
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-indigo-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <MapPinIcon
                      className="h-7 w-6 text-indigo-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    Blackpool Old Road,
                    <br />
                    Blackpool, FY3 7LR
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon
                      className="h-7 w-6 text-indigo-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-indigo-900"
                      href="mailto:hello@example.com"
                    >
                      admin@set-trust.sch.uk
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon
                      className="h-7 w-6 text-indigo-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a className="hover:text-indigo-900" href="tel:01253 392188">
                      01253 392188
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <form
            action="#"
            method="POST"
            className="px-4 pb-24 pt-12 sm:pb-32 lg:px-4 lg:py-24"
          >
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-indigo-900"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-indigo-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-indigo-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-indigo-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-indigo-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-indigo-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-indigo-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-indigo-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-indigo-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-semibold leading-6 text-indigo-900"
                  >
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone-number"
                      id="phone-number"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-indigo-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-indigo-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-indigo-900"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-indigo-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-indigo-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default ContactUs;
