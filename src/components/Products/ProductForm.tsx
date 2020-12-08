import React, { useState } from 'react'
import Button from '../../shared/Button'
import Input from '../../shared/Input'

const initialFormState = {
    name: '',
    price: '',
    stock: ''
}

const ProductForm = () => {
    const [form, setForm] = useState(initialFormState)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target

        setForm({
            ...form,
            [name]: value
        })
    }

    return <form onSubmit={() => console.log(form)}>
        <Input
            onChange={handleInputChange}
            name="name"
            label="Name"
            placeholder="e.g.: Cookie"
            required
        />
        <Input
            onChange={handleInputChange}
            name="price"
            label="Price"
            type="number"
            step="0.01"
            min="0"
            placeholder="e.g.: 1.25"
            required
        />
        <Input
            onChange={handleInputChange}
            name="stock"
            label="Stock"
            type="number"
            min="0"
            placeholder="e.g.: 15"
            required
        />
        <Button>
            Submit
        </Button>
    </form>
}

export default ProductForm