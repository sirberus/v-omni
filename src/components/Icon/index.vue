<script>
import ComplexIcon from './_ComplexIcon.vue';
import SimpleIcon from './_SimpleIcon.vue';

export default {
  props: {
    icon: {
      type: Object,
      required: true
    }
  },
  render(h) {
    if (this.icon.type === 'complex') {
      return h(ComplexIcon, 
        { 
          props: {
            wrapperClass: this.icon.wrapperClass,
            wrapperStyle: this.icon.wrapperStyle,
            layers: this.icon.value
          } 
        })
    } else {
      return h(SimpleIcon, 
        { 
          props: { 
            icon: this.icon
          } 
        })
    }
  },
}
</script>