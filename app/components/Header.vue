<template>
    <UHeader>
  <template #title>
    <div class="flex items-center space-x-2">
      <!-- Ícono con Heroicons (ya incluido en Nuxt UI) -->
      <UIcon name="i-heroicons-home" class="w-6 h-6 text-blue-500" />

      <!-- Imagen opcional -->
      <img :src="imagen" alt="cabecera" class="w-8 h-8 rounded-full" />

      <!-- Texto del título -->
      <span class="font-semibold text-lg text-gray-800">Naru - Joyería</span>
    </div>
  </template>
</UHeader>
</template>
<script setup lang="ts">
import imagen from '@/imagenes/imagen1.png'
</script>