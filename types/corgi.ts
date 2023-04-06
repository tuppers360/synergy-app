import { PortableTextBlock } from 'sanity';

export type Corgi = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  content: PortableTextBlock[];
};
