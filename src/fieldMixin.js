export default {
  inject: {
    formData: {
      default: () => ({}),
    }
  },
  methods: {
    handleInput(name, val) {
      this.$emit('input', name, val)
    }
  }
}