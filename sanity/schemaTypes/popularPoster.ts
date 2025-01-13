export default {
  name: 'popularPoster',
  title: 'Популярные постеры',
  type: 'document',
  fields: [
    {
      name: 'reference',
      title: 'Ссылка на постер',
      type: 'reference',
      to: [{type: 'poster'}],
    },
  ],
}
