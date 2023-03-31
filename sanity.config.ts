import { schemaTypes } from '@/app/(sanity)/admin/schema';
import { visionTool } from '@sanity/vision';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';
import { deskTool } from 'sanity/desk';

export const config = {
  projectId: 'v8dfdyvl',
  dataset: 'production',
  title: 'Sanity Studio',
  apiVersion: '2021-08-31',
  basePath: '/admin',
  plugins: [deskTool(), unsplashImageAsset(), visionTool()],
  schema: {
    types: schemaTypes,
  },
};
