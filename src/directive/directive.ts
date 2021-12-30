const resizeObservers = new WeakMap<HTMLElement, ResizeObserver>()

export const directive = {
  mounted (el, { value: setDimensions }) {
    const resizeObserver = new ResizeObserver(entries => {
      const { height, width } = entries[0].contentRect
      
      setDimensions({ height, width })
    })

    resizeObserver.observe(el)

    resizeObservers.set(el, resizeObserver)
  },
  beforeUnmount (el) {
    resizeObservers.get(el).disconnect()
  }
}
