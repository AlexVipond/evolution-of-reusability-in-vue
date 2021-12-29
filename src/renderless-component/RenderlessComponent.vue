<template>
  <slot :dimensions="dimensions" />
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, useSlots } from 'vue'

const emit = defineEmits<{ (e: 'change', dimensions: { height: number, width: number }): void }>()

const dimensions = ref({ height: 0, width: 0 })

let resizeObserver: ResizeObserver

const defaultSlot = useSlots().default()[0]

onMounted(() => {
  resizeObserver = new ResizeObserver(entries => {
    const { height, width } = entries[0].contentRect
    
    dimensions.value = { height, width }

    emit('change', dimensions.value)
  })

  resizeObserver.observe(defaultSlot.el as HTMLElement)
})

onBeforeUnmount(() => {
  resizeObserver.disconnect()
})
</script>
