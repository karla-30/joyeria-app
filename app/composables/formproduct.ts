// composables/useProductoForm.ts
import { ref } from 'vue'
import type { Product } from '@/types/listaproductos'
import { usarProductos } from '@/composables/useProduct'
import { useToast } from '#imports'

export function usarProductoForm() {
  const toast = useToast()
  const abrir = ref(false)
  const seleccionar = ref<Product | null>(null)

  const { products, cargar, agregar, actualizar } = usarProductos()

  const nuevoproducto = ref<Product>({
    id: Date.now(),
    nombre: '',
    precio: 0,
    descrip: ''
  })

  const crear = () => {
    if (!nuevoproducto.value.nombre.trim()) {
      toast.add({
        title: 'Nombre obligatorio',
        description: 'Debe ingresar un nombre de producto',
        color: 'error'
      })
      return
    }

    if (nuevoproducto.value.precio <= 0 || isNaN(nuevoproducto.value.precio)) {
      toast.add({
        title: 'Precio inválido',
        description: 'El precio debe ser mayor que 0',
        color: 'error'
      })
      return
    }

    if (!nuevoproducto.value.descrip.trim()) {
      toast.add({
        title: 'Descripción obligatoria',
        description: 'Debe ingresar la descripción de su producto',
        color: 'error'
      })
      return
    }

    agregar({ ...nuevoproducto.value, id: Date.now() })

    nuevoproducto.value = {
      id: Date.now(),
      nombre: '',
      precio: 0,
      descrip: ''
    }

    toast.add({
      title: 'Producto agregado',
      description: 'El producto se registró correctamente',
      color: 'success'
    })
  }
  const eliminar = (id: number) => {
    products.value = products.value.filter(p => p.id !== id)
    toast.add({
        title: 'Producto eliminado',
        description: 'Eliminado correctamente',
        color: 'success'
      })
  }
  const abrireditar = (product: Product) => {
    seleccionar.value = { ...product }
    abrir.value = true
  }

  const guardaredit = () => {
    if (!seleccionar.value) return

    if (!seleccionar.value.nombre.trim()) {
      toast.add({
        title: 'Nombre obligatorio',
        description: 'Debe ingresar un nombre de producto',
        color: 'error'
      })
      return
    }

    if (seleccionar.value.precio <= 0 || isNaN(seleccionar.value.precio)) {
      toast.add({
        title: 'Precio inválido',
        description: 'El precio debe ser mayor que 0',
        color: 'error'
      })
      return
    }

    if (!seleccionar.value.descrip.trim()) {
      toast.add({
        title: 'Descripción obligatoria',
        description: 'El producto debe tener una descripción',
        color: 'error'
      })
      return
    }

    actualizar(seleccionar.value)
    abrir.value = false

    toast.add({
      title: 'Producto actualizado',
      description: 'El producto se guardó correctamente',
      color: 'success'
    })

    setTimeout(() => {
      seleccionar.value = null
    }, 200)
  }

  const canceledit = () => {
    abrir.value = false
    setTimeout(() => {
      seleccionar.value = null
    }, 200)
  }

  return {
    abrir,
    seleccionar,
    products,
    cargar,
    agregar,
    actualizar,
    eliminar,
    nuevoproducto,
    crear,
    abrireditar,
    guardaredit,
    canceledit
  }
}
