Angular和React的变化侦测有一个共同点，那就是它们都不知道哪些状态（state）变了。因此，就需要进行比较暴力的比对，React是通过虚拟DOM的比对，Angular是使用脏检查的流程。
Vue.js 2.0开始选择了一个中等粒度的解决方案，那就是引入了虚拟DOM。组件级别是一个watcher实例，就是说即便一个组件内有10个节点使用了某个状态，但其实也只有一个watcher在观察这个状态的变化。所以当这个状态发生变化时，只能通知到组件，然后组件内部通过虚拟DOM去进行比对与渲染。
只要组件使用的众多状态中有一个发生了变化，那么整个组件就要重新更新。


react是整个vdom树做diff对比
vue是组件内部做diff，组件级别用的响应式。

# vnode
vnode调用
```javascript
// render.js
Vue.prototype._render = function (): VNode {
  const vm: Component = this
  const { render, _parentVnode } = vm.$options
  vnode = render.call(vm._renderProxy, vm.$createElement)
  return vnode
}
```



