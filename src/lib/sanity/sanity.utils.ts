import { createClient, groq } from 'next-sanity';
import { Corgi } from '../../../types/corgi';
import clientConfig from './config/client.config';

export async function getCorgis(): Promise<Corgi[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "corgi"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        content
      }`
  );
}
