// jsdom neumí některá API prohlížeče, která web používá — stačí prázdné náhrady.
globalThis.IS_REACT_ACT_ENVIRONMENT = true

globalThis.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.matchMedia = (query) => ({
  matches: false,
  media: query,
  addEventListener() {},
  removeEventListener() {},
  addListener() {},
  removeListener() {},
})

window.scrollTo = () => {}
Element.prototype.scrollTo = () => {}
Element.prototype.scrollBy = () => {}
Element.prototype.scrollIntoView = () => {}
