<template>
  <div>
    <a-form :form="form">
      <a-form-item
        v-for="item in items"
        :label="item.label"
        :key="item.key"
      >
        <a-input
          v-decorator="[item.decorator, {
            rules: [{ required: true, message: '必填' }, { min: 10, message: '10个' }]
          }]"
        ></a-input>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
export default {
  data() {
    const items = [];
    for (let i = 0; i < 30; i++) {
      items.push({
        key: i + '',
        label: '名称' + i,
        decorator: 'mc' + i
      });
    }
    return {
      form: this.$form.createForm(this),
      items
    };
  }
}
</script>