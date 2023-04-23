const siteSettings = {
  title: 'Site Settings',
  name: 'siteSettings',
  type: 'document',
  groups: [
    { title: 'Site Details', name: 'details', default: true },
    { title: 'Displays', name: 'displays' },
    { title: 'Advanced', name: 'advanced' },
  ],
  fields: [
    {
      title: 'Home Page',
      name: 'home',
      type: 'reference',
      to: [{ type: 'page' }],
      description: 'This page will show at the root of your domain',
      group: 'displays',
    },
    {
      title: 'Error Page (404)',
      name: 'error',
      type: 'reference',
      to: [{ type: 'page' }],
      description:
        'This page will show for any URL at your domain that does not exist yet',
      group: 'displays',
    },
    {
      title: 'Site Title',
      name: 'siteTitle',
      type: 'string',
      description: 'The name of your site, usually your company/brand name',
      group: 'details',
    },
    {
      title: 'Live Site URL',
      description: 'The root domain or subdomain of your website',
      name: 'siteURL',
      type: 'url',
      validation: (Rule: { required: () => any }) => Rule.required(),
      group: 'details',
    },
    {
      title: 'Main Navigation',
      name: 'mainNav',
      description: 'Select pages for the top menu',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'page' }],
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'General Settings',
      };
    },
  },
};

export default siteSettings;
