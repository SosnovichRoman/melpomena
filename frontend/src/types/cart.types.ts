import { ICartPoster } from './poster.types'

export interface ICartPosterSave {
	_id: string
	dimensionId: string
	frameId: string
}

export interface ICartRecordSave {
	cartPoster: ICartPosterSave
	quantity: number
}

export interface ICartRecord {
	cartPoster: ICartPoster
	quantity: number
}
