import { ref } from 'vue'
import type { Product } from '@/types/listaproductos'
import * as service from '@/services/servicioprod'

export const usarProductos = () => {
  const products = ref<Product[]>([])

  // cargar inicial
  const cargar = () => {
    products.value =[...service.getproductos()]
  }

  const agregar = (product: Product) => {
    service.addproductos(product)
    cargar()
  }

  const actualizar = (product: Product) => {
    service.actproductos(product)
    cargar()
  }

  const eliminar = (id: number) => {
    service.eliminarp(id)
    cargar()
  }

  return {
    products,
    cargar,
    agregar,
    actualizar,
    eliminar
  }
}