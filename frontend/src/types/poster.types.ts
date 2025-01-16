export interface IPosterShort {
	_id: string
	name: string
	slug: string
	images: [string]
}

export interface IPosterFull {
	_id: string
	name: string
	slug: string
	description: string
	images: [string]
	categories: [{ _id: string; name: string; slug: string }]
	frames: [{ _id: string; name: string; price: string }]
	dimensions: [{ _id: string; name: string; price: string }]
}

export interface ICartPosterFull {
	_id: string
	name: string
	slug: string
	description: string
	images: [string]
	categories: [{ _id: string; name: string; slug: string }]
	frame: { _id: string; name: string; price: string }
	dimension: { _id: string; name: string; price: string }
}
