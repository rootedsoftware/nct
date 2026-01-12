import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'A short description of the post',
      },
    },
    {
      name: 'alertBox',
      type: 'ui',
      admin: {
        components: {
          Field: '@/components/AlertBox',
        },
      },
    },
  ],
}
