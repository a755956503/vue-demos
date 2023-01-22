<template>
  <div class="a">
    <p>Child Text</p>
    <slot :user="user" />
  </div>
</template>
<script>
export default {
  name: 'ScopedSlotChild',
  data() {
    return {
      user: { name: 'childName' }
    };
  }
}
</script>