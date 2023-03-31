// schemas/corgi.js
export default {
  name: 'corgi',
  type: 'document',
  title: 'Corgis',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'breed',
      type: 'string',
      title: 'Breed',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alt text' }],
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'slug',
      options: { source: 'name' },
    },
  ],
};
