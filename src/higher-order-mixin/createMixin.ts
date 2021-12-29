export function createMixin (refName: string = 'element', dimensionsProp: string = 'dimensions') {
  let resizeObserver: ResizeObserver

  return {
    data: () => ({
      [dimensionsProp]: { height: 0, width: 0 },
      [refName]: null,
    }),
    mounted () {
      resizeObserver = new ResizeObserver(entries => {
        const { height, width } = entries[0].contentRect
        
        this[dimensionsProp] = { height, width }
      })

      resizeObserver.observe(this.$refs[refName])
    },
    beforeUnmount () {
      resizeObserver.disconnect()
    }
  }
}
