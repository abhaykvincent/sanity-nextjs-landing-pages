export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6152fedb48ddab25e1ae8f61',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-hrjt5ykg',
                  apiId: 'fe439c8b-75c8-405e-9b0f-d2eb842c928f'
                },
                {
                  buildHookId: '6152fedb0de47022c945df00',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-pcco9nag',
                  apiId: 'c28b5925-9bc5-441c-9a3c-dd03a24e3ac0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/abhaykvincent/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-pcco9nag.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
