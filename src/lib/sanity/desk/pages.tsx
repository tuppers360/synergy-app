import { FolderArrowDownIcon } from '@heroicons/react/20/solid';
import { HomeIcon } from '@heroicons/react/24/outline';
import { Card, Stack, Text } from '@sanity/ui';
import { createClient } from 'next-sanity';
import { StructureBuilder } from 'sanity/desk';
import { IntentLink, Link } from 'sanity/router';
import clientConfig from '../config/client.config';

type EmptyNoticeProps = {
  title: string;
  type: string;
  link: string;
  linkTitle: string;
};

const EmptyNotice = ({ title, type, link, linkTitle }: EmptyNoticeProps) => {
  if (!title || !type || !link || !linkTitle) return null;

  return (
    <Card padding={4}>
      <Card padding={[5]} radius={2} shadow={1} tone="critical">
        <Stack space={[3]}>
          <Text align="center" size={[2]} weight="semibold">
            The {title} has not been set.
          </Text>
          <Text align="center" size={[2]}>
            Set your {title} from the <Link href={link}>{linkTitle}</Link>
          </Text>
        </Stack>
      </Card>

      <Stack padding={3} space={[3]}>
        <Text align="center" muted size={[1]}>
          Don't have a {type} yet?{' '}
          <IntentLink intent="create" params={{ type }}>
            Create one now
          </IntentLink>
        </Text>
      </Stack>
    </Card>
  );
};

// Extract our home page
const currentHomePage = (S: StructureBuilder) =>
  S.listItem()
    .title('Home Page')
    .icon(HomeIcon)
    .child(async () => {
      const data = await createClient(clientConfig).fetch(`
      *[_type == "siteSettings"][0]{
        home->{_id}
      }
    `);

      if (!data?.home)
        return S.component(() => (
          <EmptyNotice
            title="Home Page"
            type="page"
            link="settings;site"
            linkTitle="Site Settings"
          />
        )).title('Home Page');

      return S.document().id(data.home._id).schemaType('page');
    });

export const pagesMenu = (S: StructureBuilder) =>
  S.listItem()
    .title('Pages')
    .id('pages')
    .child(
      S.list().title('Pages').items([
        currentHomePage,
        // S.listItem()
        //   .title('Other Pages')
        //   .schemaType('page')
        //   .child(
        //     S.documentTypeList('page')
        //       .title('Other Pages')
        //       .filter(
        //         `_type == "page" && !(_id in [
        //         *[_type == "siteSettings"][0].home._ref,
        //         *[_type == "siteSettings"][0].error._ref,
        //       ]) && !(_id in path("drafts.**"))`
        //       )
        //       .child((documentId: any) =>
        //         S.document().documentId(documentId).schemaType('page')
        //       )
        //       .canHandleIntent(
        //         (intent: string, { type }: any) =>
        //           ['create', 'edit'].includes(intent) && type === 'page'
        //       )
        //   ),
        S.divider(),
        // S.listItem()
        //   .title('Reusable Sections')
        //   .schemaType('section')
        //   .child(
        //     S.documentTypeList('section')
        //       .title('Reusable Sections')
        //       .child((documentId) =>
        //         S.document()
        //           .documentId(documentId)
        //           .schemaType('section')
        //           .views(standardViews)
        //       )
        //       .canHandleIntent(
        //         (intent, { type }) =>
        //           ['create', 'edit'].includes(intent) && type === 'section'
        //       )
        //   ),
      ])
    )
    .icon(FolderArrowDownIcon);
