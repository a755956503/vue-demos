# slot
$slots
{
  default: [VNode, VNode]
}

父组件

```javascript
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "app" } },
    [
      _c("Child", [
        _c("span", [_vm._v("Parent 1")]),
        _c("span", [_vm._v("Parent 2")])
      ])
    ],
    1
  )
}
```
子组件
```javascript
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "a" },
    [_c("p", [_vm._v("Child Text")]), _vm._t("default")],
    2
  )
}
```
# 过程
在initRender时，生成$slots对象
vm.$slots = resolveSlots(options._renderChildren, renderContext);

# scopedSlots
重点：scopedSlot定义在父组件，实际上在子组件的render里执行的，通过normalizeScopedSlots

## 基础
$scopedSlots对象
```javascript
{    
    default:function(slotProps) {        
        return ["我是放在组件的 slot :" + slotProps]
    }
}
```
父组件
```javascript
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "app" } },
    [
      _c("Child", {
        scopedSlots: _vm._u([
          {
            key: "user",
            fn: function(user) {
              return [_c("span", [_vm._v(_vm._s(user ? user.name : "") + "}")])]
            }
          }
        ])
      })
    ],
    1
  )
}
```

子组件
```javascript
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "a" },
    [
      _c("p", [_vm._v("Child Text")]),
      _vm._t("default", null, { user: _vm.user })
    ],
    2
  )
}
```

## 过程

在createElement的时候，把scopedSlots挂在VNode.data.scopedSlots
在render的时候，把VNode.data.scopedSlots赋值到vm.$scopedSlots
```javascript
if (_parentVnode) {
  vm.$scopedSlots = normalizeScopedSlots(
    _parentVnode.data.scopedSlots,
    vm.$slots,
    vm.$scopedSlots
  );
}
```

## 编译
```javascript
_vm._t("default", null, { user: _vm.user })
```

# 问题
为什么一个是initRender，一个是createElement