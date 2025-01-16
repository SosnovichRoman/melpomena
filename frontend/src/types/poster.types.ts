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
	frames: [{ _id: string; name: string; price: number }]
	dimensions: [{ _id: string; name: string; price: number }]
}

export interface ICartPoster {
	_id: string
	name: string
	slug: string
	description: string
	images: [string]
	categories: [{ _id: string; name: string; slug: string }]
	frame: { _id: string; name: string; price: number }
	dimension: { _id: string; name: string; price: number }
}
