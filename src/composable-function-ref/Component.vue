<template>
  <section class="w-full max-w-xs flex flex-col gap-4">
    <h2 class="text-xs font-semibold tracking-widest uppercase text-gray-500">Function Ref Composable</h2>
    <pre class="w-full bg-white text-gray-800 p-2 rounded"><code>{{ dimensionsJson }}</code></pre>
    <div
      class="
        h-24 w-24 resize
        flex items-center justify-center overflow-scroll p-2
        bg-green-300 text-green-900 rounded
      "
      :ref="functionRef"
    >
      {{ dimensions.height + dimensions.width }}
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDimensions } from './useDimensions'

const { dimensions, functionRef } = useDimensions()
const dimensionsJson = computed(() => JSON.stringify(dimensions.value, null, 2))
</script>
