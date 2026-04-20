import type { Product } from '@/types/listaproductos'

let products: Product[] = [
  {
    id: 1,
    nombre: 'Collar amor eterno',
    precio: 169,
    descrip: 'Collar de plata 925'
  }
]

// obtener
export const getproductos = () => products

// agregar
export const addproductos = (product: Product) => {
  products.push(product)
}

// actualizar
export const actproductos = (product: Product) => {
  const index = products.findIndex(p => p.id === product.id)
  if (index !== -1) {
    products[index] = product
  }
}

// eliminar 
export const eliminarp = (id: number) => {
  const index = products.findIndex(p => p.id === id)
  if (index !== -1) {
    products.splice(index, 1)
  }
}