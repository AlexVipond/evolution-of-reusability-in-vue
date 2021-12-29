<template>
  <section class="w-full max-w-xs flex flex-col gap-4">
    <pre class="w-full bg-white text-gray-800 p-2 rounded"><code>{{ dimensionsJson }}</code></pre>
    <RenderlessComponent @change="newDimensions => dimensions = newDimensions" v-slot="scope">
      <div
        class="
          h-24 w-24 resize
          flex items-center justify-center overflow-scroll p-2
          bg-amber-300 text-amber-900 rounded
        "
      >
        
      </div>
    </RenderlessComponent>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import RenderlessComponent from './RenderlessComponent.vue'

const dimensions = ref({ height: 0, width: 0 })
const dimensionsJson = computed(() => JSON.stringify(dimensions.value, null, 2))

const msg = ref('hello')

</script>
