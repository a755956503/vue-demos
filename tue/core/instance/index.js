function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue)
stateMixin(Vue) // vm.$watch、vm.$set和vm.$delete
eventsMixin(Vue) // vm.$on、vm.$once、vm.$off和vm.$emit
lifecycleMixin(Vue) // vm.$forceUpdate、vm.$nextTick
renderMixin(Vue) // vm.$destroy
// vm.$mount