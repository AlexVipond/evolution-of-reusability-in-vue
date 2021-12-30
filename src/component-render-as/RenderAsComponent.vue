<template>
  <component :is="as" ref="element">
    <slot :dimensions="dimensions" />
  </component>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, useSlots } from 'vue'

defineProps<{ as: string }>()

const emit = defineEmits<{ (e: 'change', dimensions: { height: number, width: number }): void }>()

const dimensions = ref({ height: 0, width: 0 })

let resizeObserver: ResizeObserver

const element = ref<HTMLElement>()

onMounted(() => {
  resizeObserver = new ResizeObserver(entries => {
    const { height, width } = entries[0].contentRect
    
    dimensions.value = { height, width }

    emit('change', dimensions.value)
  })

  resizeObserver.observe(element.value)
})

onBeforeUnmount(() => resizeObserver.disconnect())
</script>
