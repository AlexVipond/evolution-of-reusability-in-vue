export function createDirective (dimensionsProp: string = 'dimensions') {
  let resizeObserver: ResizeObserver

  return {
    mounted (el, { value: setDimensions }) {
      resizeObserver = new ResizeObserver(entries => {
        const { height, width } = entries[0].contentRect
        
        setDimensions({ height, width })
      })

      resizeObserver.observe(el)
    },
    beforeUnmount () {
      resizeObserver.disconnect()
    }
  }
}
