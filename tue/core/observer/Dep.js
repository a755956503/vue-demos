export default class Dep {
  constructor () {
    // watch的数组
    this.subs = []
  }
  
  addSub (sub) {
    this.subs.push(sub)
  }
  
  removeSub (sub) {
    remove(this.subs, sub)
  }
  
  depend () {
    if (window.target) {
      // this.addSub(window.target)
      window.target.addDep(this) // 新增
    }

    // 原生实现
    // 静态属性，区别就是没有挂载到window上污染window
    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }

  
  notify () {
    const subs = this.subs.slice()
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update()
    }
  }
}
  
function remove (arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

Dep.target = null
// 一个栈的结构在管理
const targetStack = []

export function pushTarget (target: ?Watcher) {
  targetStack.push(target)
  Dep.target = target
}

export function popTarget () {
  targetStack.pop()
  Dep.target = targetStack[targetStack.length - 1]
}
