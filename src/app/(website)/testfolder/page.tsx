import { PortableText } from '@portabletext/react';
import { createClient, groq } from 'next-sanity';

const clientConfig = {
  projectId: 'v8dfdyvl',
  dataset: 'production',
  useCdn: false,
};

const client = createClient(clientConfig);

function getCorgis() {
  return client.fetch(groq`
    *[ _type == "corgi" ]{
      _id,
      name,
      'slug': slug.current,
      'image': image.asset->url,
      'alt': image.alt,
      content[] {
        _type == "image" => {
            asset->
        }}
    }
    `);
}

type Corgi = {
  _id: string;
  name: string;
  slug: string;
  image: string;
  alt: string;
  content: any;
};

async function corgi() {
  const corgis = await getCorgis();
  console.log('🚀 ~ file: page.tsx:25 ~ corgi ~ corgis:', corgis);

  return (
    <div className="mx-auto max-w-7xl px-6 pb-32 pt-24 sm:pt-32 lg:px-8 lg:pt-16">
      <div>
        {corgis.map((corgi: Corgi) => {
          return (
            <div key={corgi._id}>
              <h1>{corgi.name}</h1>
              <div className="prose lg:prose-xl">
                <PortableText value={corgi.content} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default corgi;
