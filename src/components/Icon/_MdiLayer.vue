<template functional>
  <span :class="`icon-layer mdi mdi-${props.icon}`"/>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    }
  }
}
</script>