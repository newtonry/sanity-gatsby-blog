export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e4adae4a9fb1a13a69de279',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-fprdgtp8',
                  apiId: '395d2a2a-54a3-4778-8717-1c564b2efef6'
                },
                {
                  buildHookId: '5e4adae495c626f23f2779dc',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-uviixj1t',
                  apiId: '7e187799-a583-4191-bf1e-3ed517ac986d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/newtonry/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-uviixj1t.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
