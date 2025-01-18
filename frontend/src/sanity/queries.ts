import { ICartPosterSave } from '@/types/cart.types'

export const PostersByCategoryQuery = (category: string) => {
	if (category == '')
		return `*[_type == 'poster']{
    _id, name, slug, "images": images[].asset->url
  }`
	return `*[_type == 'poster' && '${category}' in categories[]->slug]{
  _id, name, slug, "images": images[].asset->url
}`
}

export const PosterByCartQuery = (cartPoster: ICartPosterSave) => {
	return `*[_type == 'poster' && _id == '${cartPoster._id}'
   && count(dimensions[_ref == '${cartPoster.dimensionId}']) > 0
   && count(frames[_ref == '${cartPoster.frameId}']) > 0][0]{
  _id, name, slug, description,
  "images": images[].asset->url,
  "categories": categories[]->{_id, name, slug},
  "dimension": dimensions[_ref == '${cartPoster.dimensionId}'][0]->{_id, name, price},
  "frame": frames[_ref == '${cartPoster.frameId}'][0]->{_id, name, price}
}`
}

export const PostersByCategoriesQuery = (categories: string[]) => {
	return `*[_type == 'poster' && (count((categories[]->slug)[@ in ${JSON.stringify(
		categories
	)}]) > 0) ][0..3]{
  _id, name, slug, "images": images[].asset->url
}`
}

export const PopularPostersQuery = () => {
	return `*[_type == 'popularPoster']{
  ...reference->{
  _id, name, slug, "images": images[].asset->url
  }
}`
}

export const PosterBySlug = (slug: string) => {
	return `*[_type == 'poster' && slug == '${slug}'][0]{
  _id, name, slug, description,
  "images": images[].asset->url,
  "categories": categories[]->{_id, name, slug},
  "dimensions": dimensions[]->{_id, name, price},
  "frames": frames[]->{_id, name, price}
}`
}

export const CategoryBySlug = (slug: string) => {
	return `*[_type == 'category' && slug == '${slug}'][0]{
    name, slug,
  }`
}
