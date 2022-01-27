<template>
  <div>
    <input
      :value="value"
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
    value: {
      type: String,
      default: '',
    },
  },
}
</script>
