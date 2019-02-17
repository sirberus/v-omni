<template>
  <div class="icon-wrapper" :class="icon.wrapperClass" :style="icon.wrapperStyle">
    <layer v-bind="icon"/>
  </div>
</template>

<script>
import Layer from './_Layer.vue';

export default {
  name: 'ComplexIcon',
  components: {
    Layer
  },
  props: {
    icon: {
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped>
.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
</style>
