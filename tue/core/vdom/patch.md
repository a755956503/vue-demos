# 调用

```javascript
// instance/lifecyclt.js/mountComponent
updateComponent = () => {
  vm._update(vm._render(), hydrating)
}

// instance/lifecyclt.js/lifecycleMixin
Vue.prototype._update = function (vnode: VNode, hydrating?: boolean) {
  const vm: Component = this
  const prevEl = vm.$el
  const prevVnode = vm._vnode
  const restoreActiveInstance = setActiveInstance(vm)
  vm._vnode = vnode
  // Vue.prototype.__patch__ is injected in entry points
  // based on the rendering backend used.
  if (!prevVnode) {
    // initial render
    vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */)
  } else {
    // updates
    vm.$el = vm.__patch__(prevVnode, vnode)
  }
  restoreActiveInstance()
  // update __vue__ reference
  if (prevEl) {
    prevEl.__vue__ = null
  }
  if (vm.$el) {
    vm.$el.__vue__ = vm
  }
  // if parent is an HOC, update its $el as well
  if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
    vm.$parent.$el = vm.$el
  }
  // updated hook is called by the scheduler to ensure that children are
  // updated in a parent's updated hook.
}

// runtime/index.js
Vue.prototype.__patch__ = inBrowser ? patch : noop
```


# patch过程
1. 没有oldNode，createElm newNode
2. 新节点存在并且sameVnode，patchVnode
3. 非sameVnode，createElm newNode，删除oldNode

# createElm
怎么查找parentNode

# 删除Node
没有


# 

# 问题
vnode和$vnode的区别
vnode是对象，$vnode是vm上的属性，实际也是这个对象

$el和elm
一个在vm上，一个在vnode上，实际是一个对象