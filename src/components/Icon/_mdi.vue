<template>
  <span :class="`icon mdi mdi-${props.icon} ${props.class || ''}`" :style="`${style}`"></span>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    class: {
      type: String
    },
    class: {
      type: String
    }
  }
}
</script>

<style scoped>
.icon-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>
