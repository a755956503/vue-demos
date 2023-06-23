# vnode
componentInstance: 组件实例
  createComponentInstanceForVnode生成
isCloned
isOnce
  不会生成新的componentInstance
children
  只有原生节点有children，child可能是原生节点可能是组件
  只限制在当前组件的结构（所以内部的组件的children是空的）


# diff
diff只在组件内部，组件和组件之间通过响应式


挂载
第一次 $mount
更新： 通过oldVnode.elm.parentNode


# 问题

子组件怎么更新的？


## _vnode和$vnode区别

vm._vnode = vnode

vm.$vnode = _parentVnode
vm.$options._parentVnode = parentVnode
vm.$vnode = parentVnode