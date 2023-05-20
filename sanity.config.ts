import deskStructure from '@/lib/sanity/desk/structure';
import { schemaTypes } from '@/lib/sanity/schema';
import { visionTool } from '@sanity/vision';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';
import { deskTool } from 'sanity/desk';

export const config = {
  projectId: 'v8dfdyvl',
  dataset: 'production',
  title: 'Sanity Studio',
  apiVersion: '2021-08-31',
  basePath: '/admin',
  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    unsplashImageAsset(),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
};
