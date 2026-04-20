<template>
  <Header></Header>

  
  <div class="min-h-screen bg-white py-10">
    <div class="max-w-4xl mx-auto space-y-6">
      
      <WelcomeCard></WelcomeCard>

      <!-- FORMULARIO -->
      <ProductForm :nuevoproducto="nuevoproducto" :crear="crear"></ProductForm>

      <!-- LISTA -->
      <ProductList :products="products" :abrireditar="abrireditar" :eliminar="eliminar"></ProductList>

      <!-- MODAL -->
      <ProductModal :abrir="abrir" :seleccionar="seleccionar" :guardaredit="guardaredit" :canceledit="canceledit" ></ProductModal>



    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { usarProductoForm } from '@/composables/formproduct'
import ProductModal from '@/components/ProductModal.vue'
import { useHead } from '#imports'
import { headerc } from '@/config/cabecera'

useHead(headerc)

const {
  products,
  nuevoproducto,
  crear,
  cargar,
  abrireditar,
  guardaredit,
  canceledit,
  abrir,
  seleccionar,
  eliminar
} = usarProductoForm()
onMounted(() => {
  cargar()
})
</script>
