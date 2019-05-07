export interface IDefaultOption {
    value: 'n' | 'mix' | 'single'
    label: string
}

export interface IBaseOptionItem {
    productOptionNo: number
    name: string
    required: boolean
    productOptionCode: Array<any>
}

export interface IProductOpionCodeNos {
    label: string
    refId: string
    value: string
}

export interface IProductOptionItem {
    productOptionItemNo: number
    productOptionCodeNos: Array<IProductOpionCodeNos>
    name: string
    addPrice: number
    stockQuantity: number
    useYn: boolean
}