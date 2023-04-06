import urlBuilder from '@sanity/image-url';

const projectId = 'v8dfdyvl';
const dataset = 'production';

const builder = urlBuilder({ projectId, dataset });

export function urlFor(source: string) {
  return builder.image(source);
}
