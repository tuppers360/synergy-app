// Document types
import corgi from './document/corgi';
import page from './document/page';
import policy from './document/policy';
import siteSettings from './document/siteSettings';
// Module types
import hero from './modules/hero';

export const schemaTypes = [
  /* ----------------- */
  /* 1: Document types */
  siteSettings,
  corgi,
  page,
  policy,
  /* --------------- */
  /* 2: Module types */
  hero,
];
