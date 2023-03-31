import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';

import Image from 'next/image';

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
];

export default function PageCTA() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex items-center justify-center lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="flex text-base font-semibold leading-7 text-indigo-600">
                <span className="relative -rotate-3 transform rounded-xl bg-indigo-200 px-5 py-1 text-indigo-800 shadow-md">
                  Contact us
                </span>
              </h2>
              <p className="mt-4 text-4xl font-bold tracking-tight text-indigo-800 sm:text-6xl ">
                Want to know more?
              </p>
              <p className="mt-6 text-lg font-medium leading-8 text-indigo-600">
                To access all the information you require about the Synergy
                Education Trust and its affiliated schools, kindly browse
                through our website.
              </p>
              <p className="mt-6 text-lg font-medium leading-8 text-indigo-600">
                If you need more information or assistance, please do not
                hesitate to contact us, and we will be happy to help.
              </p>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <Image
              src="https://source.unsplash.com/WMDKC8moG9w"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
