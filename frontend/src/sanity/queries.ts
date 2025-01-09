export const PostersByCategoryQuery = (category: string) => {
	return `*[_type == 'poster' && '${category}' in categories[]->slug]{
  _id, name, slug, "images": images[].asset->url
}`
}
