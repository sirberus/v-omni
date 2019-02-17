<script>
import Vue from 'vue'

export default {
  functional: true,
  props: {
    type: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    iconClass: String,
    iconStyle: String,
  },
  render(h, context) {
    switch (context.props.type) {
      case 'mdi':
        return h('span', { 
          class: context.props.iconClass,
          style: context.props.iconStyle,
          staticClass: `layer mdi mdi-${context.props.value}`
        })
      case 'text':
        return h('span', {
          class: context.props.iconClass,
          style: context.props.iconStyle,
          staticClass: `layer`
        }, [ context.props.value ])
      case 'svg':
        return h(Vue.compile(context.props.value), { 
          class: context.props.iconClass,
          style: context.props.iconStyle,
          staticClass: `layer`
        })
      default:
        return h('span', {}, [ context.props.type ])
    }
  }
}
</script>
