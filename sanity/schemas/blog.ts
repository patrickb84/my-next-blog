export default {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title of blog article',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug of your blog article',
            type: 'slug',
            options: {
                source: 'title'
            }
        },
        {
            name: 'titleImage',
            title: 'Title Image',
            type: 'image'
        },

        {
            name: 'smallDescription',
            title: 'Small Description',
            type: 'text'
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                {
                    type: 'block'
                }
            ]
        }
    ]
}