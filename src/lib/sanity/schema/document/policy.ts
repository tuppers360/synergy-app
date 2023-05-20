const policy = {
  name: 'policy',
  title: 'Policy',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'category',
      type: 'string',
      options: {
        list: [
          { title: 'Academic', value: 'academic' },
          { title: 'Admissions', value: 'admissions' },
          { title: 'Attendance', value: 'attendance' },
          { title: 'Curriculum', value: 'curriculum' },
          { title: 'Diversity, Equity, and Inclusion', value: 'dei' },
          { title: 'Emergency Procedures', value: 'emergency' },
          { title: 'Facilities', value: 'facilities' },
          { title: 'Parent and Family Engagement', value: 'family' },
          { title: 'Student Behavior', value: 'behavior' },
          { title: 'Technology', value: 'technology' },
        ],
      },
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'reviewDate',
      type: 'datetime',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'summary',
      type: 'text',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'author',
      type: 'string',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'status',
      type: 'string',
      options: {
        list: [
          { title: 'In Effect', value: 'in_effect' },
          { title: 'Repealed', value: 'repealed' },
          { title: 'Replaced', value: 'replaced' },
        ],
      },
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'relatedPolicies',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'policy' }],
        },
      ],
    },
  ],
};

export default policy;
