import { PortableText } from '@portabletext/react';
import { getImageDimensions } from '@sanity/asset-utils';
import urlBuilder from '@sanity/image-url';
import { createClient, groq } from 'next-sanity';

const clientConfig = {
  projectId: 'v8dfdyvl',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2021-08-31',
};

// Barebones lazy-loaded image component
const SampleImageComponent = ({ value, isInline }: any) => {
  const { width, height } = getImageDimensions(value);
  return (
    <img
      src={urlBuilder(clientConfig)
        .image(value)
        .width(isInline ? 100 : 800)
        .fit('max')
        .auto('format')
        .url()}
      alt={value.alt || ' '}
      loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? 'inline-block' : 'block',

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  );
};

const components = {
  types: {
    image: SampleImageComponent,
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
};

const client = createClient(clientConfig);

function getCorgis() {
  return client.fetch(groq`*[ _type == "corgi" ]{
    _id,
    name,
    'slug': slug.current,
    'image': image.asset->url,
      'alt': image.alt,
    content 
  }
  `);
}

type Corgi = {
  _id: string;
  name: string;
  slug: string;
  image: string;
  alt: string;
  content: [];
};

async function corgi() {
  const corgis = await getCorgis();
  console.log('🚀 ~ file: page.tsx:25 ~ corgi ~ corgis:', corgis);

  return (
    <div className="mx-auto max-w-7xl px-6 pb-32 pt-24 sm:pt-32 lg:px-8 lg:pt-16">
      <pre>{JSON.stringify(corgis, null, 2)}</pre>

      <div>
        {corgis.map((corgi: Corgi) => {
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

export default corgi;
