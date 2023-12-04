export type ItemValues = {
    id: number,
    name: string,
    description: string,
    price: number,
    imgURL?: string,
    orderQuantity: number;
}

export type ITemCartValues = {
    orderQuantity?: number;
}