import { ProductCreator } from '../components/Products/ProductForm'
import { Product } from '../shared/Table/Table.mockdata'
import http from '../utils/http'

export const getAllProducts = () =>
    http
        .get<Product[]>('/products')
        .then(res => res.data)

export const createSingleProducts = (product: ProductCreator) =>
    http
        .post('/products', product)

export const updateSingleProducts = ({ _id, name, price, stock }: Product) =>
        http
            .patch(`/products/${_id}`, {
                ...(name && { name }),
                ...(price && { price }),
                ...(stock && { stock }),
            })

export const deleteSingleProducts = (id: string) =>
        http
            .delete(`/products/${id}`)
