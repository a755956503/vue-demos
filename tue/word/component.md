# 生命周期
initState
  initData

更新
怎么触发组件更新


props怎么储存的？

# 对象
## VM
组件实例，就是this
创建： new Vue | new VueComponent | new Ctor

属性
$parent
$vnode和_vnode
render的时候会对所有子组件生成vnode对象，存在自身vnode.children里，但是组件本身没有创建
_vnode：组件自身render生成的vnode对象。
$vnode：上层组件生成的vnode对象，在创建子组件是传给子组件
区分： _vnode的tag是组件内顶层标签，$vnode的tag是组件名

Vue实例： $vnode为空
## VNode
componentOptions: { Ctor, propsData, listeners, tag, children }
new VNode时传入
  Ctor: 构造函数
isComment asyncFactory

创建： 由render=>createElement生成

属性
componentInstance: vm实例的引用， vnode.componentInstance.$vnode === vnode
  _createElement -》createComponent -》 createComponentInstanceForVnode


## componentOptions
Ctor: 构造函数

# render
_c: createElement 

# 常见问题
_vnode和$vnode