<template>
  <div class="card">
    <div class="card-content">
      <component :is="inner" v-bind="props" />
    </div>
  </div>
</template>

<script setup lang="ts" generic="TInner extends Component">
import type { Component } from 'vue';
import type { ComponentProps } from 'vue-component-type-helpers';

defineProps<{ inner: TInner; props: ComponentProps<TInner> }>();
</script>
