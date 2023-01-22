<template>
  <div class="">
    <div>
      <button @click="add1">add1</button>
    </div>
    <div>count: {{ count }}</div>
    <ComProp :prop1="prop1" />
  </div>
</template>

<script>
import ComProp from './ComProp';
export default {
  name: "Com",
  components: { ComProp },
  data() {
    return {
      count: 0,
      prop1: { a: { b: 1 } }
    };
  },
  created() {
    // this.obj.a = 1;
    this.$set(this.obj, 'a', 1);
    delete this.obj.defaulta;
  },
  methods: {
    add1() {
      this.count++;
    },
    // 增加的属性的变更无法被监听到
    // 删了再创建回来也不行
    add2() {
      this.obj.a++;
      console.log("this.obj.a", this.obj.a);
    },
  },
};
</script>
