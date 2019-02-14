<template>
  <div class="icon-wrapper">
    <mdi v-if="icon.type === 'mdi'" :icon="icon.mdi"/>
  </div>
</template>

<script>
import Mdi from './_MdiLayer.vue'

export default {
  components: {
    Mdi
  },
  props: {
    icon: {
      type: Object,
      required: true
    }
  }
}
</script>