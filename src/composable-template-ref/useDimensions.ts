import { ref, onMounted, onBeforeUnmount, Ref } from 'vue'

export function useDimensions (element: Ref<HTMLElement>) {
  const dimensions = ref({ height: 0, width: 0 })
  
  let resizeObserver: ResizeObserver

  onMounted(() => {
    resizeObserver = new ResizeObserver(entries => {
      const { height, width } = entries[0].contentRect
      
      dimensions.value = { height, width }
    })

    resizeObserver.observe(element.value)
  })

  onBeforeUnmount(() => {
    resizeObserver.disconnect()
  })

  return { dimensions }
}
