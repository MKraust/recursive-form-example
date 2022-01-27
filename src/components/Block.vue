<template>
  <div>
    <component
      v-for="field in children"
      :key="field.key"
      :is="getFieldComponent(field.type)"
      v-bind="field"
      @input="handleInput"
    />
  </div>
</template>

<script>
import fieldMixin from '@/fieldMixin';
import { getFieldComponent } from '@/comp';

export default {
  mixins: [fieldMixin],
  props: {
    children: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getFieldComponent,
  },
}
</script>
