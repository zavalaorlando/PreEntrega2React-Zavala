import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId).then(result => {
            setProducts(result)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId])

    if(loading) {
        return <h1>Cargando indumentaria...</h1>
    }

    return (
        <main style={{ background: 'white smoke'}} onClick={() => console.log('itemlistcontainer')}>
            <h1>{greeting}</h1>
            {products.length > 0 ? <ItemList products={products}/> : <h1>No hay productos disponibles</h1> }
        </main>
    )
}

export default ItemListContainer