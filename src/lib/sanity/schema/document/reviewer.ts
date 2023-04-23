const reviewer = {
  // Define the schema type for reviewers
  name: 'reviewer',
  title: 'Reviewer',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The name of the reviewer',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'The email of the reviewer',
    },
  ],
};

export default reviewer;
