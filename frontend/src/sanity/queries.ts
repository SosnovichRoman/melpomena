export const PostersByCategoryQuery = (category: string) => {
	return `*[_type == 'poster' && '${category}' in categories[]->slug]{
  _id, name, slug, "images": images[].asset->url
}`
}

export const PosterBySlug = (slug: string) => {
	return `*[_type == 'poster' && slug == '${slug}'][0]{
  _id, name, slug, description,
  "images": images[].asset->url,
  "categories": categories[]->{_id, name},
  "dimensions": dimensions[]->{_id, name, price},
  "frames": frames[]->{_id, name, price}
}`
}
