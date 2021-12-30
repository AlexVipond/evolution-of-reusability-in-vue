<template>
  <section class="w-full max-w-xs flex flex-col gap-4">
    <h2 class="text-xs font-semibold tracking-widest uppercase text-gray-500">Higher Order Directive</h2>
    <pre class="w-full bg-white text-gray-800 p-2 rounded"><code>{{ dimensionsJson }}</code></pre>
    <div
      class="
        h-24 w-24 resize
        flex items-center justify-center overflow-scroll p-2
        bg-red-300 text-red-900 rounded
      "
      v-dimensions="newDimensions => dimensions = newDimensions"
    >
      {{ dimensions.height + dimensions.width }}
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { createDirective } from './createDirective'

export default defineComponent({
  directives: { dimensions: createDirective() },
  data: () => ({
    dimensions: { height: 0, width: 0 },
  }),
  computed: {
    dimensionsJson () {
      return JSON.stringify(this.dimensions, null, 2)
    }
  },
})
</script>
