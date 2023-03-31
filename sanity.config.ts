import { schemaTypes } from '@/app/(sanity)/admin/schema';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';
import { deskTool } from 'sanity/desk';

export const config = {
  projectId: 'v8dfdyvl',
  dataset: 'production',
  title: 'Sanity Studio',
  basePath: '/admin',
  plugins: [deskTool(), unsplashImageAsset()],
  schema: {
    types: schemaTypes,
  },
};
