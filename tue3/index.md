@vue/runtime-dom
@vue/runtime-core


# 对象
## app
{
  mount
  unmount
    mount(null)
  provide
    context.provides[key as string | symbol] = value
  use
  mixin
  component
  directive
}

## VNode
```js
{
  component: {},
  appContext: {}, // appVnode额外属性
  attrs: {},
  ctx: {},
  emit: {},
  props: {},
  propsDefaults: {},
  propsOptions: {},
  providers: {},
}
```
## Component
