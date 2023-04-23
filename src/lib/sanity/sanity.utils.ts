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

export async function getPolicies(): Promise<Policy[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "policy"]{
        _id,
        _createdAt,
        name,
        content
      }`
  );
}
