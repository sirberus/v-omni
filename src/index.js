import Icon from "./components/Icon";

export { Icon }

export default {
  Icon,
  install(Vue) {
    Vue.component('icon', Icon)
  }
}