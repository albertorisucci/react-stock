import { Thunk } from ".."
import { ProductCreator } from "../../components/Products/ProductForm"
import { 
    createSingleProducts, 
    deleteSingleProducts, 
    getAllProducts, 
    updateSingleProducts 
} from "../../services/Products.service"
import { Product } from "../../shared/Table/Table.mockdata"

export const updateProduct =
    (newProduct: Product):Thunk =>
    async (dispatch) => {
        await updateSingleProducts(newProduct)
        dispatch(getProducts())
    }

export const getProducts = (): Thunk<Product[]> => async (dispatch) => {
    const products = await getAllProducts()
    dispatch ({
        type: 'FETCH_PRODUCTS',
        payload: products
    })
}

export const insertNewProduct = (product: ProductCreator): Thunk =>
    async (dispatch) => {
        await createSingleProducts(product)
        dispatch(getProducts())
}

export const deleteProduct = (productId: string): Thunk =>
    async (dispatch) => {
        await deleteSingleProducts(productId)
        dispatch(getProducts())
}