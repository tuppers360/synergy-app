//File name: navigation.ts
//File location: schemas/documents

const navigation = {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'navId',
      type: 'slug',
      title: 'Navigation Id',
    },
  ],
};

export default navigation;
