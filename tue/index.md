# 执行过程
new Vue -> init

mount -> mountCompont -> new Watcher -> get -> updateComponent -> 多一个init


# 创建组件
render




createChildren
createElm
createComponent
init
  createComponentInstanceForVnode：生成实例
    new Ctor
    _init
    initRender
      vm.$vnode = options._parentVnode
  mountComponent
    new Watcher -》 updateComponent
      _vnode = _render()
      _update
        vm._vnode = vnode
        vm.$el = patch
https://juejin.cn/post/6844904135209271303
