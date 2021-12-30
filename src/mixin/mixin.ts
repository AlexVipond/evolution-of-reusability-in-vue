export const mixin = {
  data: () => ({
    dimensions: { height: 0, width: 0 },
    element: null,
  }),
  mounted () {
    this.resizeObserver = new ResizeObserver(entries => {
      const { height, width } = entries[0].contentRect
      
      this.dimensions = { height, width }
    })

    this.resizeObserver.observe(this.$refs.element)
  },
  beforeUnmount () {
    this.resizeObserver.disconnect()
  }
}
