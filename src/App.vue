<template>
  <div>导航栏 |
    <router-link to="/">cx</router-link>
    |
    <router-link to="/xxx">cx2</router-link>
  </div>
  <hr/>
  <router-view/>
</template>

<script>
export default {
  name: 'app'
}
</script>
