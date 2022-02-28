<template>
  <div :size="size">
    <button v-bind="rest">
      你好
    </button>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: false,
  setup(props, context) {
    const {size, ...rest} = context.attrs;
    return {size, rest};
  }
};
</script>
<style lang="scss" scoped>
div {
  border: 1px solid red
}
</style>