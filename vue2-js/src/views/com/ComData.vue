<template>
  <div class="">
    <div>
      <button @click="add1">add1</button>
      <button @click="add2">add2</button>
    </div>
    <div>defaulta: {{ obj.defaulta }}</div>
    <div>a: {{ obj.a }}</div>
  </div>
</template>

<script>
export default {
  name: "ComData",
  data() {
    return {
      obj: {
        defaulta: 1,
      },
    };
  },
  created() {
    // this.obj.a = 1;
    this.$set(this.obj, 'a', 1);
    delete this.obj.defaulta;
  },
  methods: {
    add1() {
      if (isNaN(this.obj.defaulta)) {
        this.obj.defaulta = 1;
      }
      this.obj.defaulta++;
      console.log("this.obj.defaulta", this.obj.defaulta);
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
