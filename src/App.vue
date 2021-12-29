<template>
  <main class="w-screen flex flex-col gap-10 p-20 items-center justify-center overflow-y-scroll">
    <WithHigherOrderMixin />
    <WithHigherOrderDirective />
    <WithRenderlessComponent />
    <h1 class="text-sm text-gray-500">The Evolution of Reusability in Vue</h1>
  </main>
</template>

<script setup lang="ts">
import WithHigherOrderMixin from './higher-order-mixin/Component.vue'
import WithHigherOrderDirective from './higher-order-directive/Component.vue'
import WithRenderlessComponent from './renderless-component/Component.vue'
</script>
