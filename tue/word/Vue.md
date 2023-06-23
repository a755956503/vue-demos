new Vue的过程

_init


# initState
处理prop,data,method,computed,watch信息

computed原理
实际是挂载

# new Vue过程
new Vue
_init

# 组件创建过程
createEle
  createComponent
    init
    $mount
      mountComponent
        updateComponent
          _render


# 更新过程
proxySetter
reactiveSetter(defineReactive的set函数)
Dep.notify
Watcher.update  queueWatcher(this)
queueWatcher nextTick(flushScheduleQueue)
nextTick
timerFunc
flushCallbacks
flushScheduleQueue
Watcher.run
Watcher.get
updateComponent
  render
  _update(lifecycle那个update)
    patch
      patchVNode
        updateChild
      createElm
    

