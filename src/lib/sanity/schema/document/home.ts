// page.ts
const home = {
  // Setup a 'document' type to house the page builder field
  name: 'home',
  type: 'document',
  title: 'Home Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the page',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'The slug of the page from ome document',
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

export default home;
