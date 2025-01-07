export default {
  name: 'poster',
  title: 'Постер',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Название',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'URL путь',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Описание',
      type: 'string',
    },
    {
      name: 'categories',
      title: 'Категория',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'category'}],
        },
      ],
    },
    {
      name: 'dimensions',
      title: 'Размеры',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'dimension'}],
        },
      ],
    },
    {
      name: 'frames',
      title: 'Доступные рамки',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'frame'}],
        },
      ],
    },
    {
      name: 'images',
      title: 'Изображения',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
}
