<template>
  <UCard>
    <template #header>
      <h2 class="text-lg font-semibold">Agregar producto</h2>
    </template>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <UInput v-model="nuevoproducto.nombre" placeholder="Nombre del producto" color="info" />
      <UInput v-model="nuevoproducto.precio" type="number" step="0.01" placeholder="Precio" color="info" />
      <UTextarea v-model="nuevoproducto.descrip" placeholder="Descripción" color="info"/>
    </div>

    <div class="flex justify-end mt-4">
      <UButton @click="crear" color="info">Agregar Producto</UButton>
    </div>
  </UCard>
</template>

<script setup lang="ts">
import type { Product } from '@/types/listaproductos'

defineProps<{
  nuevoproducto: Product
  crear: () => void
}>()
</script>
