//File name: navItem.js
//File location: schema/objects

const navItem = {
  name: 'navigationItem',
  title: 'Navigation Item',
  type: 'object',
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Navigation Text',
    },
    {
      name: 'navigationItemUrl',
      type: 'link',
      title: 'Navigation Item URL',
    },
  ],
};

export default navItem;
