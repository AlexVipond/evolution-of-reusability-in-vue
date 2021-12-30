<template>
  <main class="w-screen grid grid-cols-1 sm:grid-cols-2 items-start gap-20 p-20 overflow-y-scroll">
    <WithDirective />
    <WithHigherOrderDirective />
    <WithMixin />
    <WithHigherOrderMixin />
    <WithRenderlAsComponent />
    <WithRenderlessComponent />
    <WithTemplateRefComposable />
    <WithFunctionRefComposable />
    <h1 class="text-sm text-gray-500">The Evolution of Reusability in Vue</h1>
  </main>
</template>

<script setup lang="ts">
import WithMixin from './mixin/Component.vue'
import WithHigherOrderMixin from './mixin-higher-order/Component.vue'
import WithDirective from './directive/Component.vue'
import WithHigherOrderDirective from './directive-higher-order/Component.vue'
import WithRenderlAsComponent from './component-render-as/Component.vue'
import WithRenderlessComponent from './component-renderless/Component.vue'
import WithTemplateRefComposable from './composable-template-ref/Component.vue'
import WithFunctionRefComposable from './composable-function-ref/Component.vue'
</script>
