import { createClient, groq } from 'next-sanity';
import { Corgi } from '../../../types/corgi';
import { Policy } from '../../../types/policy';
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

export async function getPolicy(): Promise<Policy> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "policy"][0]{
      _id,
      _createdAt,
      title,
      content,
      "headings": content[length(style) == 2 && string::startsWith(style, "h")]{
        _key,
        'heading':children[]{
          text
        }
      }
    }`
  );
}
