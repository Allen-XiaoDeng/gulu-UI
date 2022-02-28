<template>

  <button class="gulu-button"
          :class="`theme-${theme}`">
    你好
  </button>
</template>
<script lang="ts">

export default {
  props: {
    theme: {
      type: String,
      default: 'button'
    }
  }
};


</script>
<style lang="scss" scoped>
div {
  border: 1px solid red
}
</style>
