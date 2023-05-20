// Document types
import corgi from './document/corgi';
import navigation from './document/navigation';
import page from './document/page';
import policy from './document/policy';
import siteSettings from './document/siteSettings';
import toc from './document/toc';
import tocLink from './document/tocLink';
import tocSection from './document/tocSection';
// Module types
import hero from './modules/hero';
import link from './objects/link';
import navItem from './objects/navItem';

export const schemaTypes = [
  /* ----------------- */
  /* 1: Document types */
  siteSettings,
  corgi,
  page,
  policy,
  toc,
  tocSection,
  tocLink,
  navigation,
  navItem,
  link,
  /* --------------- */
  /* 2: Module types */
  hero,
];
