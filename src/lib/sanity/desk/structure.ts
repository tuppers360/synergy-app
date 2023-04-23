// import { StructureBuilder } from 'sanity/desk';
// deskStructure.js
import {
  CogIcon,
  HomeIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';
import { StructureBuilder } from 'sanity/desk';

// // ./deskStructure.js
// const hiddenDocTypes = (listItem: any) =>
//   ![
//     //'home',
//     //'policy',
//     // 'page',
//     // 'section',
//     // 'product',
//     // 'productVariant',
//     // 'collection',
//     // 'filter',
//     // 'solidColor',

//     'siteSettings',
//     // 'cookieSettings',
//     // 'promoSettings',
//     // 'headerSettings',
//     // 'footerSettings',
//     // 'shopSettings',
//     // 'seoSettings',

//     // 'menu',
//     // 'siteSettings',
//     // 'redirect',
//     // 'media.tag', // for media plugin
//   ];

const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Desk')
    .items([
      S.listItem()
        .title('Pages')
        .icon(HomeIcon) // Pages icon
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Home Page')
                .icon(HomeIcon) // Home icon
                .child(
                  S.document()
                    .title('Homepage')
                    .schemaType('page')
                    .documentId('homepage')
                ),
              S.listItem()
                .title('About Page')
                .icon(InformationCircleIcon) // Info icon
                .child(
                  S.document()
                    .title('About')
                    .schemaType('page')
                    .documentId('about')
                ),
              S.listItem()
                .title('Error Page')
                .icon(InformationCircleIcon) // Info icon
                .child(
                  S.document()
                    .title('Error')
                    .schemaType('page')
                    .documentId('error')
                ),
              S.listItem()
                .title('Other pages')
                .schemaType('page')
                .child(
                  S.documentTypeList('page')
                    .title('Other pages')
                    .filter(
                      `_type == "page" && !(_id in [
                        *[_type == "siteSettings"][0].home._ref,
                        *[_type == "siteSettings"][0].about._ref,
                        *[_type == "siteSettings"][0].error._ref,
                      ]) && !(_id in path("drafts.**"))`
                    )
                    .child((documentId) =>
                      S.document()
                        .documentId(documentId)
                        .schemaType('page')
                        .views([
                          S.view.form().icon(CogIcon), // Form view icon
                          S.view
                            .component((): any => 'CustomPreview')
                            .title('Preview')
                            .icon(CogIcon),
                        ])
                    )
                ),
            ])
        ),
      S.listItem()
        .title('Settings')
        .icon(CogIcon) // Settings icon
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings')
        ),
    ]);

export default deskStructure;
