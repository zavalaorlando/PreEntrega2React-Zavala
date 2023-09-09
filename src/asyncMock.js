const products = [
    { 
        id: '1', 
        name: 'Remeron Negro', 
        price: 2800, 
        category: 'remerones', 
        img: 'https://zavalaorlando.github.io/proyecto-final-JS-OrlandoZavala/image/remerones.jpeg', 
        stock: 30, 
        description:'Remeron Negro con logo de Lofana'
    },
    { id: '2', name: 'Remeron Blanco', price: 2800, category: 'remerones', img:'https://zavalaorlando.github.io/proyecto-final-JS-OrlandoZavala/image/remeron%201.jpeg', stock: 25, description:'Remeron Blanco diseño MOTION'},
    { id: '3', name: 'Joggin Beige', price: 2500, category: 'joggins', img:'https://zavalaorlando.github.io/proyecto-final-JS-OrlandoZavala/image/jogin%202.jpeg', stock: 9, description:'Joggin Friza beige'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}