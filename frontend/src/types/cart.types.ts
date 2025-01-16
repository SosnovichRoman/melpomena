export interface ICartPoster {
	_id: string
	dimensionId: string
	frameId: string
}

export interface ICartRecord {
	cartPoster: ICartPoster
	quantity: number
}
