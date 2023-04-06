// schemas/corgi.js
const corgi = {
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
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
          // styles: [
          //   { title: 'Normal', value: 'normal' },
          //   { title: 'H1', value: 'h1' },
          //   { title: 'H2', value: 'h2' },
          //   { title: 'H3', value: 'h3' },
          //   { title: 'H4', value: 'h4' },
          //   { title: 'H5', value: 'h5' },
          //   { title: 'H6', value: 'h6' },
          //   { title: 'Quote', value: 'blockquote' },
          // ],
        },
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    },
  ],
};

export default corgi;
