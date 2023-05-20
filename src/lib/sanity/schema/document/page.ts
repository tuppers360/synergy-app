// page.ts
const page = {
  // Setup a 'document' type to house the page builder field
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the page',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description: 'The slug of the page',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'The description of the page',
    },
    {
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        { type: 'hero' }, // hero.js (same applies for the other types)
      ],
    },
  ],
};

export default page;
