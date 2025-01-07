export default {
  name: 'category',
  title: 'Категория',
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
      name: 'image',
      title: 'Изображение',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
