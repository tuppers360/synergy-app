import { PortableTextBlock } from 'sanity';

export type Policy = {
  _id: string;
  _createdAt: Date;
  name: string;
  content: PortableTextBlock[];
};
