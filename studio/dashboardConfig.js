export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5e32d7205623e71b5bac9bf6',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-aj9ajzgm',
                  apiId: '630267c6-af44-472f-80f5-512f5b7ce513'
                },
                {
                  buildHookId: '5e32d720b9c259a9ae3a3cfe',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-ues64owu',
                  apiId: '24652dda-8c53-475a-a9c8-ed6af7dbb766'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/carillontoweradvisers/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-ues64owu.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
