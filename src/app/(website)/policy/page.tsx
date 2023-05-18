import { getPolicy } from '@/lib/sanity/sanity.utils';
import { PortableText, PortableTextComponents } from '@portabletext/react';

// `components` object you'll pass to PortableText
const components: PortableTextComponents = {
  block: {
    h2: ({ value, children }) => (
      <h2 id={value._key}>
        <a className=""></a>
        <a href={value._key}></a>
        {children}
      </h2>
    ),
  },
};

async function PolicyPage() {
  const policy = await getPolicy();

  return (
    <div className="mx-auto max-w-7xl px-6 pb-32 pt-24 sm:pt-32 lg:px-8 lg:pt-16">
      PolicyPage
      <div className="flex flex-col lg:flex-row-reverse">
        <section className="sticky top-8 h-full w-full lg:w-1/3">
          <span className="text-lg md:text-2xl">Policy Content</span>
          <ul>
            {policy.headings.map((item) => (
              <li key={item._key}>
                <a href={`#${item._key}`}>{item.heading[0].text}</a>
              </li>
            ))}
          </ul>
        </section>
        <section className="w-full space-y-4 pr-10 lg:w-2/3">
          <h1>{policy.title}</h1>
          <div className="prose md:prose-lg prose-h2:scroll-m-8">
            <PortableText value={policy.content} components={components} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default PolicyPage;
