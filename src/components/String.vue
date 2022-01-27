<template>
  <div>
    <input
      :value="value"
      :placeholder="title"
      @input="handleInput(name, $event.target.value)"
    />
  </div>
</template>

<script>
import fieldMixin from '@/fieldMixin';

export default {
  mixins: [fieldMixin],
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  computed: {
    value() {
      return this.formData[this.name]
    },
  },
}
</script>
