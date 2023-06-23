extendOptions: ComponentOptions


# nextTick

pending
callbacks
flushCallbacks: Function

promise -> MutationObserver -> setTimeout

```javascript
01  new Vue({
02    // ……
03    methods: {
04      // ……
05      example: function () {
06        // 先使用nextTick注册回调
07        this.$nextTick(function () {
08          // DOM没有更新
09        })
10        // 然后修改数据
11        this.message = 'changed'
12      }
13    }
14  })
```
因为修改数据也是异步的，也是个nextTick，换成setTimeout可以