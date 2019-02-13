<template functional>
  <div class="icon-wrapper">
    <span :class="`icon mdi mdi-${props.icon}`"></span>
  </div>
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