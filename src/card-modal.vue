<template>
  <div class="card">
    <div class="card-content">
      <component :is="inner" v-bind="props" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    inner: {},
    props: {},
  },
}
</script>
