// componentOptions和componentInstance 组件节点独有属性
// functionalContext和functionalOptions:  函数式组件独有属性
export default class VNode {
  constructor (tag, data, children, text, elm, context, componentOptions, asyncFactory) {
    this.tag = tag
    this.data = data
    this.children = children
    this.text = text
    this.elm = elm
    this.ns = undefined
    this.context = context
    this.functionalContext = undefined
    this.functionalOptions = undefined
    this.functionalScopeId = undefined
    this.key = data && data.key
    // 组件节点的选项参数，其中包含propsData、tag和children等信息。
    // { Ctor, propsData, listeners, tag, children }
    this.componentOptions = componentOptions
    // Vue.js的实例。在Vue.js中，每个组件都是一个Vue.js实例。
    this.componentInstance = undefined
    this.parent = undefined
    this.raw = false
    this.isStatic = false
    this.isRootInsert = true
    this.isComment = false
    this.isCloned = false
    this.isOnce = false
    this.asyncFactory = asyncFactory
    this.asyncMeta = undefined
    this.isAsyncPlaceholder = false
  }

  get child () {
    return this.componentInstance
  }
}

// 注释节点
export const createEmptyVNode = (text) => {
  const node = new VNode()
  node.text = text
  node.isComment = true
  return node
}

// 文本节点
export function createTextVNode (val: string | number) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// 复制节点: 优化静态节点和插槽节点（slot node）。
export function cloneVNode (vnode: VNode): VNode {
  const cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    // 不是深拷贝，以前是递归调用cloneVNode
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  )
  cloned.ns = vnode.ns
  cloned.isStatic = vnode.isStatic
  cloned.key = vnode.key
  cloned.isComment = vnode.isComment
  cloned.fnContext = vnode.fnContext
  cloned.fnOptions = vnode.fnOptions
  cloned.fnScopeId = vnode.fnScopeId
  cloned.asyncMeta = vnode.asyncMeta
  cloned.isCloned = true
  return cloned
}
