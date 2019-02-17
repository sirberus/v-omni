<template>
  <div class="icon-wrapper complex-icon" :class="wrapperClass" :style="wrapperStyle" >
    <div class="icon-layer-wrapper" v-for="(layer, i) in layers" :key="`layer-${i}`"
      :class="layer.wrapperClass" :style="layer.wrapperStyle" 
    >
      <layer v-bind="layer"/>
    </div>
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
    layers: {
      type: Array, 
      required: true
    },
    wrapperClass: String,
    wrapperStyle: String,
  },
}
</script>

<style scoped>
.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.complex-icon {
  position: relative;
}
.icon-layer-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>