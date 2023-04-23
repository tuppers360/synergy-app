const school = {
  // Define the schema type for schools
  name: 'school',
  title: 'School',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The name of the school',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'The location of the school',
    },
  ],
};

export default school;
