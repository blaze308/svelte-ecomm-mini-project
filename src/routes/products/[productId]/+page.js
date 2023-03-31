// @ts-nocheck
export const load = ({ fetch, params }) => {
    console.log(params);

    export const fetchProducts = async (id) => {
        const res = await fetch(`http://localhost:3000/products/${id}`)
        const data = await res.json();
        return data;
    }

    return {
        product: fetchProducts(params.productId)
    }
}