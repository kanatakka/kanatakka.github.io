<style>
  .red {
    color: #f00;
  }
</style>

<template>
  <h1 class="red">{{msg}}</h1>
</template>

<script>
  export default {
    name: 'App',
    data: function () {
      return {
        msg: 'Hell world!'
      }
    }
  }
</script>