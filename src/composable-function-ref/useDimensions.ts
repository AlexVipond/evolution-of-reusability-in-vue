import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useDimensions () {
  const element = ref<HTMLElement>()
  const functionRef = (el: HTMLElement) => element.value = el

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

  return { dimensions, functionRef }
}
