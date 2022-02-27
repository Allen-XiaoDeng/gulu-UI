<template>
  <router-view/>
</template>

<script lang="ts">
import {ref, provide} from 'vue';

export default {
  name: 'app',
  setup() {
    const width = document.documentElement.clientWidth;
    const asideVisible = ref(width > 500);
    provide('asideVisible', asideVisible);
  }
};
</script>
