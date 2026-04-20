<template>
  <UModal :open="abrir"
    @update:open="$emit('update:abrir', $event)">
    <template #content>
      <div v-if="seleccionar" class="p-6 bg-white rounded-2xl w-full max-w-md mx-auto">
        
        <h2 class="text-xl font-semibold mb-6">Editar producto</h2>

        
        <div class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-600 mb-1">
              Nombre del producto
            </label>
            <UInput v-model="seleccionar.nombre" size="lg" color="neutral"/>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-600 mb-1">
              Precio
            </label>
            <UInput v-model="seleccionar.precio" type="number" size="lg" color="neutral"/>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-600 mb-1">
              Descripción
            </label>
            <UTextarea v-model="seleccionar.descrip" size="lg" color="neutral"/>
          </div>
        </div>

        
        <div class="flex justify-end gap-3 mt-6">
          <UButton color="neutral" variant="soft" @click="canceledit">
            Cancelar
          </UButton>
          <UButton @click="guardaredit">
            Actualizar
          </UButton>
        </div>
      </div>
    </template>
  </UModal>
</template>

<script setup lang="ts">
import type { Product } from '@/types/listaproductos'
defineProps<{
  abrir: boolean
  seleccionar: Product | null
  guardaredit: () => void
  canceledit: () => void
}>()
</script>
