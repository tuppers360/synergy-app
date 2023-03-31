import { schemaTypes } from '@/app/(sanity)/admin/schema';
import { deskTool } from 'sanity/desk';

export const config = {
  projectId: 'v8dfdyvl',
  dataset: 'production',
  title: 'Sanity Studio',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
};
