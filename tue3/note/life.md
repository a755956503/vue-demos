# 主要过程
createApp: 返回app对象
  rootComponent = { ...rootComponent }
  createAppContext
  installedPlugins
  app = context.app = {}

mount
app.mount
createVNode
render
patch

# 更新
## 绑定
setupRenderEffect
```js
const effect = (instance.effect = new ReactiveEffect(
  componentUpdateFn,
  () => queueJob(update),
  instance.scope // track it in component's effect scope
))
const update: SchedulerJob = (instance.update = () => effect.run())
```

## 更新
componentUpdateFn