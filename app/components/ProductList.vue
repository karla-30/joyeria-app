<template>
  <UCard>
    <template #header>
      <h2 class="text-lg font-semibold">Lista de productos</h2>
    </template>

    <div class="space-y-3">
      <div
        v-for="p in products"
        :key="p.id"
        class="flex justify-between items-center bg-white p-4 rounded-lg border"
      >
        <div>
          <p class="font-semibold">{{ p.nombre }}</p>
          <p class="text-sm text-gray-500">S/. {{ p.precio }}</p>
          <p class="text-sm">{{ p.descrip }}</p>
        </div>

        <div class="flex gap-2">
          <UButton size="sm" @click="abrireditar(p)">
            Editar
          </UButton>

          <UButton size="sm" color="error" variant="soft" @click="eliminar(p.id)">
            Eliminar
          </UButton>
        </div>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
import type { Product } from '@/types/listaproductos'

defineProps<{
  products: Product[]
  abrireditar: (p: Product) => void
  eliminar: (id: number) => void
}>()
</script>

