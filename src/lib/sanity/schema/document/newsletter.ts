// Define the schema for the newsletter
const newsletter = {
  // Define the type for the newsletter
  name: 'newsletter',
  title: 'Newsletter',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the newsletter',
    },
    {
      name: 'introduction',
      title: 'Introduction',
      type: 'text',
      description: 'A brief introduction to the newsletter',
    },
    {
      name: 'schoolNews',
      title: 'School News',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'school' }],
        },
      ],
      description:
        'Updates on events, activities, and accomplishments of the schools in the trust',
    },
    {
      name: 'curriculumAndLearning',
      title: 'Curriculum & Learning',
      type: 'text',
      description:
        'Information on curriculum changes, updates, or improvements, and insights into the learning and teaching practices across the trust',
    },
    {
      name: 'governanceAndLeadership',
      title: 'Governance & Leadership',
      type: 'text',
      description:
        'The governance structure of the trust and any notable achievements or initiatives from the board of trustees',
    },
    {
      name: 'communityEngagement',
      title: 'Community Engagement',
      type: 'text',
      description:
        'News and updates on any community outreach programs or initiatives, events or activities that bring the schools and the community together, and any partnerships or collaborations with local organizations',
    },
    {
      name: 'parentAndCarerInformation',
      title: 'Parent & Carer Information',
      type: 'text',
      description:
        "Updates on any policies or procedures affecting parents and carers, resources or tips to support parents and carers in supporting their child's education and well-being, and updates on any upcoming events or parent-teacher meetings",
    },
    {
      name: 'stage',
      type: 'string',
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'Review', value: 'review' },
          { title: 'Published', value: 'published' },
        ],
        layout: 'radio',
      },
      validation: (Rule: { required: () => any }) => Rule.required(),
      hidden: ({ document }: any) => document.stage === 'published',
    },
    {
      name: 'reviewers',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'reviewer' }] }],
      hidden: ({ document }: any) => document.stage !== 'review',
    },
  ],
  // Define the workflow for the newsletter
  initialValue: {
    stage: 'draft',
    reviewers: [],
  },
};
