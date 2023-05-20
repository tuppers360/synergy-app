import { PortableTextBlock } from 'sanity';

export type Policy = {
  _id: string;
  _createdAt: Date;
  title: string;
  content: PortableTextBlock[];
  headings: [
    {
      _key: string;
      heading: [
        {
          text: string;
        }
      ];
    }
  ];
};
