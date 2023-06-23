/**
 * Observer类会附加到每一个被侦测的object上。
 * 一旦被附加上，Observer会将object的所有属性转换为getter/setter的形式
 * 来收集属性的依赖，并且当属性发生变化时会通知这些依赖
 */
import { arrayMethods } from './array'

// __proto__ 是否可用
const hasProto = '__proto__' in {}
const arrayKeys = Object.getOwnPropertyNames(arrayMethods)
export class Observer {
  constructor (value) {
    this.value = value;
    this.dep = new Dep();
    def(value, '__ob__', this);
    // 如果是数组，则遍历所有元素
    if(Array.isArray(value)) {
      var argument = hasProto ? protoAugment : copyAugment;
      argument(value, arrayMethods, arrayKeys);
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  }

  /**
   * 侦测Array中的每一项
   */
  observeArray (items) {
    for (let i = 0, l = items.length; i < l; i++) {
      observe(items[i])
    }
  }

  /**
   * walk会将每一个属性都转换成getter/setter的形式来侦测变化
   * 这个方法只有在数据类型为Object时被调用
   */
  walk (obj) {
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i], obj[keys[i]])
    }
  }
}

function protoAugment (target, src, keys) {
  target.__proto__ = src
}

function copyAugment (target, src, keys) {
  for (let i = 0, l = keys.length; i < l; i++) {
    const key = keys[i]
    def(target, key, src[key])
  }
}

export function defineReactive (
  obj: Object,
  key: string,
  val: any,
  customSetter?: ?Function,
  shallow?: boolean
) {
  // 新增，递归子属性
  let childOb = !shallow && observe(val)
  let dep = new Dep()
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      dep.depend()
      // 新增
      if (childOb) {
        childOb.dep.depend()
      }
      return val
    },
    set: function (newVal) {
      if(val === newVal){
        return
      }

      val = newVal
      dep.notify()
    }
  })
}


/**
 * 尝试为value创建一个Observer实例，
 * 如果创建成功，直接返回新创建的Observer实例。
 * 如果value已经存在一个Observer实例，则直接返回它
 */
export function observe (value, asRootData) {
  if (!isObject(value)) {
    return
  }
  let ob
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__
  } else {
    ob = new Observer(value)
  }
  return ob
}

// 缓存原始方法
const original = arrayProto[method]
def(arrayMethods, method, function mutator (...args) {
  const result = original.apply(this, args)
  const ob = this.__ob__
  let inserted
  switch (method) {
   case 'push':
   case 'unshift':
     inserted = args
      break
    case 'splice':
      inserted = args.slice(2)
      break
  }
  // 使用Observer侦测新增元素
  if (inserted) ob.observeArray(inserted) // 新增
  ob.dep.notify()  // 向依赖发送消息
  return result
})

export function set (target, key, val) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key)
    target.splice(key, 1, val)
    return val
  }

  if (key in target && !(key in Object.prototype)) {
    target[key] = val
    return val
  }

  // 新增
  const ob = target.__ob__
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    )
    return val
  }
  if (!ob) {
    target[key] = val
    return val
  }
  defineReactive(ob.value, key, val)
  ob.dep.notify()
  return val
}

export function del (target, key) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1)
    return
  }
  const ob = target.__ob__
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    )
    return
  }

  if (!hasOwn(target, key)) {
    return
  }
  delete target[key]

  // 如果ob不存在，则直接终止程序
  if (!ob) {
    return
  }
  ob.dep.notify()
}