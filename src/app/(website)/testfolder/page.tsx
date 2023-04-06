import { urlFor } from '@/lib/sanity/image.utils';
import { getCorgis } from '@/lib/sanity/sanity.utils';
import { PortableText } from '@portabletext/react';
import { getImageDimensions } from '@sanity/asset-utils';
import Image from 'next/image';

export const revalidate = 30;

// Bare bones lazy-loaded image component
const SampleImageComponent = ({ value, isInline }: any) => {
  const { width, height } = getImageDimensions(value);
  return (
    <Image alt="" src={urlFor(value).url()} width={width} height={height} />
  );
};

const components = {
  types: {
    image: SampleImageComponent,
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
};

async function CorgiPage() {
  const corgis = await getCorgis();
  console.log('🚀 ~ file: page.tsx:25 ~ corgi ~ corgis:', corgis);

  return (
    <div className="mx-auto max-w-7xl px-6 pb-32 pt-24 sm:pt-32 lg:px-8 lg:pt-16">
      <div>
        {corgis.map((corgi) => {
          return (
            <div key={corgi._id}>
              <h1>{corgi.name}</h1>
              <div className="prose lg:prose-xl">
                <PortableText value={corgi.content} components={components} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CorgiPage;
